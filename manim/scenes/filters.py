from manim import *
import numpy as np


class Filters(Scene):
    """Filters visualization - based on SoundVisualization with a filter rectangle in the middle."""

    def construct(self):
        self.camera.background_color = "#282625"

        # Colors
        axis_color = "#666666"
        text_color = "#888888"

        # Multiple frequency components for spectrogram effect
        # (frequency, amplitude, color) - blue to green to yellow to red
        components = [
            (0.5, 0.7, "#3366FF"),   # Low bass - blue
            (1.0, 1.0, "#4488FF"),   # Bass - blue
            (1.6, 0.5, "#55AAFF"),   # Low-mid - light blue
            (2.2, 1.3, "#66CCAA"),   # Mid (loudest) - cyan
            (2.8, 0.9, "#77DD88"),   # Mid - teal
            (3.5, 0.7, "#99EE66"),   # Mid-high - green
            (4.2, 0.5, "#CCEE44"),   # High - yellow-green
            (5.0, 0.4, "#EEDD33"),   # Higher - yellow
            (5.8, 0.35, "#FFAA33"),  # Higher - orange
            (6.5, 0.3, "#FF6633"),   # Highest - red-orange
            (7.2, 0.25, "#FF4444"),  # Highest - red
        ]

        num_components = len(components)
        phase = ValueTracker(0)

        # Perspective parameters
        angle = 25 * DEGREES
        cos_a = np.cos(angle)
        sin_a = np.sin(angle)

        # Axis dimensions
        x_len = 4.5
        y_len = 2.8

        # Shear matrix
        left_shear = [
            [cos_a, 0, 0],
            [-sin_a, 1, 0],
            [0, 0, 1]
        ]

        # Create the first (leftmost) axes
        first_axes = Axes(
            x_range=[0, 4 * PI, PI],
            y_range=[-1.5, 1.5, 0.5],
            x_length=x_len,
            y_length=y_len,
            axis_config={
                "color": axis_color,
                "stroke_opacity": 0,
                "stroke_width": 1,
                "include_tip": False,
                "tip_length": 0.03,
                "tip_width": 0.06,
            },
        )
        first_axes.apply_matrix(left_shear)
        first_axes.move_to(LEFT * 4.0 + DOWN * 0.3)

        first_origin = first_axes.c2p(0, 0)

        # Frequency axis - positioned at filter pane (mid_time = 2*PI)
        freq_direction = np.array([0.6, 0.2, 0])
        freq_axis_length = 12.0
        filter_origin = first_axes.c2p(2 * PI, 0)  # Position at filter pane
        freq_axis = Arrow(
            filter_origin,
            filter_origin + freq_direction * freq_axis_length,
            color="#FF9933",
            stroke_width=1.5,
            buff=0,
            max_tip_length_to_length_ratio=0.015
        )

        # Labels - more visible
        label_color = "#AAAAAA"
        label_size = 14

        freq_angle = np.arctan2(freq_direction[1], freq_direction[0])
        freq_label = Text("Frequency", font_size=label_size, color="#FF9933", font="Menlo")
        freq_label.rotate(freq_angle)
        freq_label.next_to(freq_axis.get_end(), UP + RIGHT, buff=0.1)

        x_direction = np.array([cos_a, -sin_a, 0])
        time_angle = np.arctan2(x_direction[1], x_direction[0])
        time_label = Text("Time", font_size=label_size, color=label_color, font="Menlo")
        time_label.rotate(time_angle)
        time_label.next_to(first_axes.c2p(4 * PI, 0), DOWN + RIGHT, buff=0.1)

        amp_label = Text("Amplitude", font_size=label_size, color=label_color, font="Menlo")
        amp_label.rotate(90 * DEGREES)
        amp_label.next_to(first_axes.c2p(0, 1.5), LEFT, buff=0.1)

        # Create axes, waves, and spectral bands for each component
        all_axes = []
        all_pre_waves = []  # Gray waves before filter
        all_post_waves = []  # Colored waves after filter
        all_bands = []
        all_bars = []
        pre_wave_updaters = []
        post_wave_updaters = []

        freq_max = 8.0
        max_pos = 0.85  # Maximum position along frequency axis

        # Filter parameters (defined early so waves can use them)
        filter_cutoff = 0.55  # Cutoff at 55% of the frequency range
        filter_steepness = 15  # How steep the rolloff is
        filter_position = 2 * PI  # Position of filter along time axis (middle)

        def get_filter_gain(freq):
            """Calculate filter gain for a given frequency"""
            freq_pos = (freq / freq_max) * max_pos / max_pos  # Normalize to 0-1
            return 1.0 / (1.0 + np.exp(filter_steepness * (freq_pos - filter_cutoff)))

        def create_pre_wave_func(axes, freq, amp):
            """Create gray wave before filter"""
            gray_color = "#888888"

            def get_wave(phase_val):
                pre_filter_points = []
                for t in np.linspace(0, filter_position, 75):
                    y_val = amp * np.sin(freq * t - phase_val * freq)
                    screen_point = axes.c2p(t, y_val)
                    pre_filter_points.append(screen_point)

                pre_path = VMobject()
                if len(pre_filter_points) > 1:
                    pre_path.set_points_smoothly(pre_filter_points)
                    pre_path.set_stroke(gray_color, width=2, opacity=0.35)
                    pre_path.set_z_index(1)  # Keep behind filter
                return pre_path
            return get_wave

        def create_post_wave_func(axes, freq, amp, color):
            """Create colored wave after filter"""
            filter_gain = get_filter_gain(freq)

            def get_wave(phase_val):
                post_filter_points = []
                for t in np.linspace(filter_position, 4 * PI, 75):
                    transition_width = 0.3
                    blend = min(1.0, (t - filter_position) / transition_width)
                    current_amp = amp * (1.0 - blend * (1.0 - filter_gain))
                    y_val = current_amp * np.sin(freq * t - phase_val * freq)
                    screen_point = axes.c2p(t, y_val)
                    post_filter_points.append(screen_point)

                post_path = VMobject()
                if len(post_filter_points) > 1:
                    post_path.set_points_smoothly(post_filter_points)
                    post_path.set_stroke(color, width=2, opacity=1.0)
                    post_path.set_z_index(10)  # Keep in front after updates
                return post_path
            return get_wave

        for i, (freq, amp, color) in enumerate(components):
            # Position along frequency axis
            pos = (freq / freq_max) * max_pos
            point = first_origin + freq_direction * freq_axis_length * pos

            # Create axes at this position for all components
            axes = Axes(
                x_range=[0, 4 * PI, PI],
                y_range=[-1.5, 1.5, 0.5],
                x_length=x_len,
                y_length=y_len,
                axis_config={
                    "color": axis_color,
                "stroke_opacity": 0,
                    "stroke_width": 0.8,
                    "include_tip": False,
                    "tip_length": 0.025,
                    "tip_width": 0.05,
                },
            )
            axes.apply_matrix(left_shear)
            axes_origin = axes.c2p(0, 0)
            axes.shift(point - axes_origin)
            all_axes.append(axes)

            # Create pre-filter wave (gray, before filter)
            pre_wave_func = create_pre_wave_func(axes, freq, amp)
            pre_wave = pre_wave_func(0)
            all_pre_waves.append(pre_wave)

            # Create post-filter wave (colored, after filter)
            post_wave_func = create_post_wave_func(axes, freq, amp, color)
            post_wave = post_wave_func(0)
            all_post_waves.append(post_wave)

            # Create updaters
            def make_updater(wf):
                def updater(mob):
                    mob.become(wf(phase.get_value()))
                return updater
            pre_wave_updaters.append((pre_wave, make_updater(pre_wave_func)))
            post_wave_updaters.append((post_wave, make_updater(post_wave_func)))

            # Create spectral band
            band_width = 0.04
            pos_start = pos - band_width / 2
            pos_end = pos + band_width / 2

            # Get rectangle corners for this band
            first_y_bottom = first_axes.c2p(0, -1.5)
            first_y_top = first_axes.c2p(0, 1.5)
            first_y_zero = first_axes.c2p(0, 0)

            bl = np.array(first_y_bottom) + freq_direction * freq_axis_length * pos_start
            br = np.array(first_y_bottom) + freq_direction * freq_axis_length * pos_end
            ml = np.array(first_y_zero) + freq_direction * freq_axis_length * pos_start
            mr = np.array(first_y_zero) + freq_direction * freq_axis_length * pos_end
            tl = np.array(first_y_top) + freq_direction * freq_axis_length * pos_start
            tr = np.array(first_y_top) + freq_direction * freq_axis_length * pos_end

            amp_normalized = amp / 1.5
            tl_amp = ml + (tl - ml) * amp_normalized
            tr_amp = mr + (tr - mr) * amp_normalized

            band = Polygon(
                ml, mr, tr_amp, tl_amp,
                fill_color=color,
                fill_opacity=0.5,
                stroke_width=0,
            )
            all_bands.append(band)

            # Create amplitude bar
            bar_width = 0.18
            bar_bl = np.array(axes.c2p(0, 0))
            bar_br = bar_bl + freq_direction * bar_width
            bar_tl = np.array(axes.c2p(0, amp))
            bar_tr = bar_tl + freq_direction * bar_width
            bar = Polygon(
                bar_bl, bar_br, bar_tr, bar_tl,
                fill_color=color,
                fill_opacity=0.6,
                stroke_width=1,
                stroke_color=color
            )
            all_bars.append(bar)

        # Get last axes for rectangle boundary
        last_pos = (components[-1][0] / freq_max) * max_pos
        last_point = first_origin + freq_direction * freq_axis_length * last_pos

        # Rectangle boundary for Spectral Components (at the start of time axis)
        first_y_bottom = first_axes.c2p(0, -1.5)
        first_y_top = first_axes.c2p(0, 1.5)
        last_y_bottom = np.array(first_y_bottom) + freq_direction * freq_axis_length * last_pos
        last_y_top = np.array(first_y_top) + freq_direction * freq_axis_length * last_pos

        freq_rectangle = Polygon(
            first_y_bottom,
            first_y_top,
            last_y_top,
            last_y_bottom,
            color=axis_color,
            stroke_width=1.5,
            fill_opacity=0.02
        )


        # === FILTER RECTANGLE - At middle of time axis, extends along frequency to cover output ===
        mid_time = 2 * PI
        filter_freq_extent = 1.0  # Extend along frequency axis to cover the Fourier output

        # Get the positions at the middle of the time axis
        mid_y_bottom = first_axes.c2p(mid_time, -1.5)
        mid_y_top = first_axes.c2p(mid_time, 1.5)
        # Extend along frequency axis to cover output
        mid_last_y_bottom = np.array(mid_y_bottom) + freq_direction * freq_axis_length * filter_freq_extent
        mid_last_y_top = np.array(mid_y_top) + freq_direction * freq_axis_length * filter_freq_extent

        # Filter rectangle outline (no fill)
        filter_rectangle = Polygon(
            mid_y_bottom,
            mid_y_top,
            mid_last_y_top,
            mid_last_y_bottom,
            color="#FF9933",
            stroke_width=2,
            fill_opacity=0
        )

        # Create hatching lines inside the filter rectangle
        filter_hatching = VGroup()
        num_hatch_lines = 40
        for i in range(num_hatch_lines + 1):
            t = i / num_hatch_lines
            # Vertical lines along frequency direction
            start = np.array(mid_y_bottom) + freq_direction * freq_axis_length * filter_freq_extent * t
            end = np.array(mid_y_top) + freq_direction * freq_axis_length * filter_freq_extent * t
            line = Line(start, end, color="#888888", stroke_width=0.5, stroke_opacity=0.3)
            filter_hatching.add(line)

        # Horizontal lines
        num_horiz_lines = 16
        for i in range(num_horiz_lines + 1):
            t = i / num_horiz_lines
            # Interpolate along the vertical edge
            left_point = np.array(mid_y_bottom) * (1 - t) + np.array(mid_y_top) * t
            right_point = np.array(mid_last_y_bottom) * (1 - t) + np.array(mid_last_y_top) * t
            line = Line(left_point, right_point, color="#888888", stroke_width=0.5, stroke_opacity=0.3)
            filter_hatching.add(line)

        # Filter label - at the beginning of the pane
        filter_label = Text("Low-Pass Filter", font_size=label_size, color="#FF9933", font="Menlo")
        filter_label.rotate(freq_angle)
        filter_label.next_to(mid_y_top, UP + RIGHT, buff=0.1)

        # Parallel frequency line at the filter position (bottom of filter rectangle)
        filter_freq_line = DashedLine(
            mid_y_bottom,
            np.array(mid_y_bottom) + freq_direction * freq_axis_length * filter_freq_extent,
            color="#FF9933",
            stroke_width=1.5,
            dash_length=0.1
        )

        # Vertical cutoff frequency line on the filter pane
        cutoff_pos = filter_cutoff * filter_freq_extent  # Position along frequency axis
        cutoff_bottom = np.array(mid_y_bottom) + freq_direction * freq_axis_length * cutoff_pos
        cutoff_top = np.array(mid_y_top) + freq_direction * freq_axis_length * cutoff_pos
        cutoff_line = DashedLine(
            cutoff_bottom,
            cutoff_top,
            color="#FF9933",
            stroke_width=2,
            dash_length=0.08
        )

        # Cutoff frequency label
        cutoff_label = Text("Cutoff", font_size=12, color="#FF9933", font="Menlo")
        cutoff_label.rotate(90 * DEGREES)
        cutoff_label.next_to(cutoff_top, UP, buff=0.1)

        # Low pass filter curve inside the filter rectangle
        # The curve goes from high (pass) at low frequencies to low (attenuate) at high frequencies
        filter_curve_points = []
        num_filter_points = 100

        for i in range(num_filter_points):
            # Position along frequency axis (0 to 1)
            freq_pos = i / (num_filter_points - 1)

            # Low pass filter response: sigmoid-like rolloff (using same parameters as wave filtering)
            # 1.0 at low frequencies, drops to 0 at high frequencies
            filter_gain = 1.0 / (1.0 + np.exp(filter_steepness * (freq_pos - filter_cutoff)))

            # Map to position in the rectangle
            # Vertical: from bottom (-1.5) to top (1.5), but we use 0 to 1.5 for the filter curve
            y_val = -1.5 + filter_gain * 3.0  # Maps 0->-1.5, 1->1.5

            # Get the base point at this frequency position
            base_point = first_axes.c2p(mid_time, y_val)
            # Offset along frequency direction
            point = np.array(base_point) + freq_direction * freq_axis_length * filter_freq_extent * freq_pos
            filter_curve_points.append(point)

        filter_curve = VMobject()
        filter_curve.set_points_smoothly(filter_curve_points)
        filter_curve.set_stroke("#FF9933", width=5, opacity=1.0)

        # Parallel frequency axis at x-ends
        first_x_end = first_axes.c2p(4 * PI, 0)
        last_x_end = np.array(first_x_end) + freq_direction * freq_axis_length * last_pos
        parallel_freq_axis = DashedLine(
            first_x_end,
            last_x_end,
            color=axis_color,
            stroke_width=1,
            dash_length=0.1
        )

        # Fourier transform axes and wave
        final_pos = 1.0
        final_point = first_origin + freq_direction * freq_axis_length * final_pos

        final_axes = Axes(
            x_range=[0, 4 * PI, PI],
            y_range=[-1.5, 1.5, 0.5],
            x_length=x_len,
            y_length=y_len,
            axis_config={
                "color": axis_color,
                "stroke_opacity": 0,
                "stroke_width": 1,
                "include_tip": False,
                "tip_length": 0.03,
                "tip_width": 0.06,
            },
        )
        final_axes.apply_matrix(left_shear)
        final_axes_origin = final_axes.c2p(0, 0)
        final_axes.shift(final_point - final_axes_origin)
        final_origin = final_axes.c2p(0, 0)

        # Fourier transform visualization
        freq_scale = (4 * PI) / freq_max

        def get_fourier_wave():
            points = []

            for t in np.linspace(0, 4 * PI, 300):
                y = 0
                for freq, amp, _ in components:
                    # Apply filter gain to each frequency component
                    filtered_amp = amp * get_filter_gain(freq)
                    peak_pos = freq * freq_scale
                    peak_width = 0.35
                    y += filtered_amp * np.exp(-((t - peak_pos) ** 2) / (2 * peak_width ** 2))

                y = y * 0.5
                screen_point = final_axes.c2p(t, y)
                points.append(screen_point)

            path = VMobject()
            path.set_points_smoothly(points)
            path.set_stroke(WHITE, width=2, opacity=0.9)
            return path

        fourier_wave = get_fourier_wave()

        # Fourier bars - mirrored bars under the Fourier wave at each frequency
        fourier_bars = []
        for freq, amp, color in components:
            # Position along the x-axis of final_axes
            t_pos = freq * freq_scale

            # Calculate the height at this position (same as wave calculation)
            y_height = 0
            for f, a, _ in components:
                peak_pos = f * freq_scale
                peak_width = 0.35
                y_height += a * np.exp(-((t_pos - peak_pos) ** 2) / (2 * peak_width ** 2))
            y_height = y_height * 0.5

            # Bar width in t-space
            bar_t_width = 0.3
            t_left = t_pos - bar_t_width / 2
            t_right = t_pos + bar_t_width / 2

            # Get screen coordinates using axes
            bl = final_axes.c2p(t_left, -y_height)
            br = final_axes.c2p(t_right, -y_height)
            tl = final_axes.c2p(t_left, y_height)
            tr = final_axes.c2p(t_right, y_height)

            # Create mirrored bar (bottom to top)
            fourier_bar = Polygon(
                bl, br, tr, tl,
                fill_color=color,
                fill_opacity=0.7,
                stroke_width=0.5,
                stroke_color=color
            )
            fourier_bars.append(fourier_bar)

        # === ANIMATION STEPS ===

        # Add base structure
        self.add(freq_axis, freq_label)

        # Add axes and gray waves (behind filter pane)
        for i in range(len(components)):
            all_axes[i].set_z_index(0)
            all_pre_waves[i].set_z_index(1)
            self.add(all_axes[i])
            self.add(all_pre_waves[i])
            all_pre_waves[i].add_updater(pre_wave_updaters[i][1])

        # Add filter pane (in the middle layer)
        filter_hatching.set_z_index(2)  # Hatching behind colored waves
        filter_rectangle.set_z_index(5)
        filter_label.set_z_index(5)
        filter_curve.set_z_index(5)
        filter_freq_line.set_z_index(5)
        cutoff_line.set_z_index(5)
        cutoff_label.set_z_index(5)
        self.add(filter_hatching, filter_rectangle, filter_label, filter_curve, filter_freq_line, cutoff_line, cutoff_label)

        # Add colored waves (in front of filter pane)
        for i in range(len(components)):
            all_post_waves[i].set_z_index(10)  # Ensure colored waves are in front
            self.add(all_post_waves[i])
            all_post_waves[i].add_updater(post_wave_updaters[i][1])

        self.play(phase.animate.set_value(20 * PI), run_time=10, rate_func=linear)

        # Remove all updaters
        for wave, updater in pre_wave_updaters:
            wave.remove_updater(updater)
        for wave, updater in post_wave_updaters:
            wave.remove_updater(updater)
