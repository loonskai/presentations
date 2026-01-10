from manim import *
import numpy as np


class SoundVisualization(Scene):
    """Sound visualization - time domain with frequency axis spectrogram style."""

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
                "stroke_width": 1,
                "include_tip": True,
                "tip_length": 0.03,
                "tip_width": 0.06,
            },
        )
        first_axes.apply_matrix(left_shear)
        first_axes.move_to(LEFT * 4.0 + DOWN * 0.6)

        first_origin = first_axes.c2p(0, 0)

        # Frequency axis
        freq_direction = np.array([0.6, 0.2, 0])
        freq_axis_length = 12.0
        freq_axis = Arrow(
            first_origin,
            first_origin + freq_direction * freq_axis_length,
            color=axis_color,
            stroke_width=1.5,
            buff=0,
            max_tip_length_to_length_ratio=0.015
        )

        # Labels - more visible
        label_color = "#AAAAAA"
        label_size = 14

        freq_angle = np.arctan2(freq_direction[1], freq_direction[0])
        freq_label = Text("Frequency", font_size=label_size, color=label_color, font="Menlo")
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
        all_waves = []
        all_bands = []
        all_bars = []
        wave_updaters = []

        freq_max = 8.0
        max_pos = 0.85  # Maximum position along frequency axis

        def create_wave_func(axes, freq, amp, color):
            def get_wave(phase_val):
                points = []
                for t in np.linspace(0, 4 * PI, 150):
                    y_val = amp * np.sin(freq * t - phase_val * freq)
                    screen_point = axes.c2p(t, y_val)
                    points.append(screen_point)

                path = VMobject()
                path.set_points_smoothly(points)
                path.set_stroke(color, width=2, opacity=0.85)
                return path
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
                    "stroke_width": 0.8,
                    "include_tip": True,
                    "tip_length": 0.025,
                    "tip_width": 0.05,
                },
            )
            axes.apply_matrix(left_shear)
            axes_origin = axes.c2p(0, 0)
            axes.shift(point - axes_origin)
            all_axes.append(axes)

            # Create wave using the axes coordinate system
            wave_func = create_wave_func(axes, freq, amp, color)
            wave = wave_func(0)
            all_waves.append(wave)

            # Create updater
            def make_updater(wf):
                def updater(mob):
                    mob.become(wf(phase.get_value()))
                return updater
            wave_updaters.append((wave, make_updater(wave_func)))

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

        # Rectangle boundary
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

        # Spectral Components label
        spectral_label = Text("Spectral Components", font_size=label_size, color=label_color, font="Menlo")
        spectral_label.rotate(freq_angle)
        rect_center = (np.array(first_y_top) + np.array(last_y_top)) / 2
        spectral_label.move_to(rect_center + np.array([0, 0.15, 0]))

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
                "stroke_width": 1,
                "include_tip": True,
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
                    peak_pos = freq * freq_scale
                    peak_width = 0.35
                    y += amp * np.exp(-((t - peak_pos) ** 2) / (2 * peak_width ** 2))

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

        # Step 1: Show base elements and low frequency wave (first component)
        low_freq_idx = 0  # First component (lowest frequency)
        high_freq_idx = -1  # Last component (highest frequency)

        # Add base structure
        self.add(freq_axis, freq_label, time_label, amp_label)
        self.add(all_axes[low_freq_idx])  # First axes for low freq
        self.add(all_waves[low_freq_idx])

        # Add updater for low freq wave
        all_waves[low_freq_idx].add_updater(wave_updaters[low_freq_idx][1])

        self.play(phase.animate.set_value(4 * PI), run_time=3, rate_func=linear)

        # Step 2: Add high frequency wave
        self.add(all_axes[high_freq_idx])  # Last axes
        self.add(all_waves[high_freq_idx])
        all_waves[high_freq_idx].add_updater(wave_updaters[high_freq_idx][1])

        self.play(phase.animate.set_value(8 * PI), run_time=3, rate_func=linear)

        # Step 3: Add all remaining waves
        for i in range(1, len(components) - 1):
            self.add(all_axes[i])
            self.add(all_waves[i])
            all_waves[i].add_updater(wave_updaters[i][1])

        self.play(phase.animate.set_value(12 * PI), run_time=3, rate_func=linear)

        # Step 4: Add spectral components (rectangle, bands, bars)
        self.add(freq_rectangle, parallel_freq_axis, spectral_label)
        self.add(*all_bands)
        self.add(*all_bars)

        self.play(phase.animate.set_value(16 * PI), run_time=3, rate_func=linear)

        # Step 5: Add Fourier transform
        self.add(final_axes, *fourier_bars, fourier_wave)

        self.play(phase.animate.set_value(36 * PI), run_time=10, rate_func=linear)

        # Remove all updaters
        for wave, updater in wave_updaters:
            wave.remove_updater(updater)
