from manim import *
import numpy as np


class PhaseCancellation(Scene):
    """Sound visualization - Reese bass style with detuned sawtooth waves."""

    def construct(self):
        self.camera.background_color = "#282625"

        # Colors
        axis_color = "#666666"
        text_color = "#888888"

        # Parameters matching SuperCollider code
        base_freq = 55  # Hz
        detune = 0.5  # semitones (increased for visibility)

        # Detune ratios from SuperCollider code (converted to frequency multipliers)
        detune_ratios = [0, detune, -detune, detune * 2, -detune * 2, detune * 1.5, -detune * 1.5]

        # Create component list: (relative_freq_mult, amplitude, color)
        # Colors going from warm red to orange to yellow
        components = []
        colors = ["#FF4444", "#FF6B4A", "#FF8844", "#FFAA33", "#FFCC44", "#FFDD55", "#FFEE66"]

        for i, d in enumerate(detune_ratios):
            freq_mult = 2 ** (d / 12)  # Convert semitones to frequency ratio
            components.append((freq_mult, 1.0 / len(detune_ratios), colors[i]))

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

        # Frequency axis (representing detuning spread)
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

        # Labels
        label_color = "#AAAAAA"
        label_size = 14

        freq_angle = np.arctan2(freq_direction[1], freq_direction[0])

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

        max_pos = 0.85

        def sawtooth(t):
            """Basic sawtooth wave."""
            return 2 * (t / (2 * PI) - np.floor(0.5 + t / (2 * PI)))

        def create_wave_func(axes, freq_mult, amp, color):
            def get_wave(phase_val):
                points = []
                for t in np.linspace(0, 4 * PI, 150):
                    # Sawtooth wave with frequency multiplier
                    y_val = amp * sawtooth((t - phase_val) * freq_mult * 2)
                    screen_point = axes.c2p(t, y_val)
                    points.append(screen_point)

                path = VMobject()
                path.set_points_smoothly(points)
                path.set_stroke(color, width=2, opacity=0.85)
                return path
            return get_wave

        for i, (freq_mult, amp, color) in enumerate(components):
            # Position along frequency axis (spread evenly)
            pos = (i / (num_components - 1)) * max_pos if num_components > 1 else 0.5
            point = first_origin + freq_direction * freq_axis_length * pos

            # Create axes at this position
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

            # Create wave
            wave_func = create_wave_func(axes, freq_mult, amp * 1.5, color)
            wave = wave_func(0)
            all_waves.append(wave)

            # Create updater
            def make_updater(wf):
                def updater(mob):
                    mob.become(wf(phase.get_value()))
                return updater
            wave_updaters.append((wave, make_updater(wave_func)))

            # Create spectral band
            band_width = 0.08
            pos_start = pos - band_width / 2
            pos_end = pos + band_width / 2

            first_y_bottom = first_axes.c2p(0, -1.5)
            first_y_top = first_axes.c2p(0, 1.5)
            first_y_zero = first_axes.c2p(0, 0)

            bl = np.array(first_y_bottom) + freq_direction * freq_axis_length * pos_start
            br = np.array(first_y_bottom) + freq_direction * freq_axis_length * pos_end
            ml = np.array(first_y_zero) + freq_direction * freq_axis_length * pos_start
            mr = np.array(first_y_zero) + freq_direction * freq_axis_length * pos_end
            tl = np.array(first_y_top) + freq_direction * freq_axis_length * pos_start
            tr = np.array(first_y_top) + freq_direction * freq_axis_length * pos_end

            amp_normalized = amp / (1.0 / len(detune_ratios))
            tl_amp = ml + (tl - ml) * amp_normalized * 0.5
            tr_amp = mr + (tr - mr) * amp_normalized * 0.5

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
            bar_tl = np.array(axes.c2p(0, amp * 1.5))
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
        last_pos = max_pos
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
        spectral_label = Text("Detuned Oscillators", font_size=label_size, color=label_color, font="Menlo")
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

        # Combined output axes and wave
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

        # Combined waveform (sum of all detuned sawtooths)
        def get_combined_wave(phase_val):
            points = []
            for t in np.linspace(0, 4 * PI, 300):
                y = 0
                for freq_mult, amp, _ in components:
                    y += amp * sawtooth((t - phase_val) * freq_mult * 2)
                y = y * 1.2  # Slight boost for visibility
                screen_point = final_axes.c2p(t, np.clip(y, -1.4, 1.4))
                points.append(screen_point)

            path = VMobject()
            path.set_points_smoothly(points)
            path.set_stroke(WHITE, width=2.5, opacity=0.9)
            return path

        combined_wave = get_combined_wave(0)

        def combined_updater(mob):
            mob.become(get_combined_wave(phase.get_value()))


        # === ANIMATION STEPS ===

        # Show base elements
        self.add(freq_axis, time_label, amp_label)

        # Add waves one by one in sequence
        current_phase = 0
        phase_per_wave = 2 * PI

        for i in range(len(components)):
            self.add(all_axes[i])
            self.add(all_waves[i])
            all_waves[i].add_updater(wave_updaters[i][1])

            current_phase += phase_per_wave
            self.play(phase.animate.set_value(current_phase), run_time=1.5, rate_func=linear)

        # Add spectral components visualization
        self.add(freq_rectangle, parallel_freq_axis, spectral_label)
        self.add(*all_bands)
        self.add(*all_bars)

        current_phase += 4 * PI
        self.play(phase.animate.set_value(current_phase), run_time=3, rate_func=linear)

        # Add combined output
        self.add(final_axes)
        combined_wave.add_updater(combined_updater)
        self.add(combined_wave)

        current_phase += 16 * PI
        self.play(phase.animate.set_value(current_phase), run_time=8, rate_func=linear)

        # Remove all updaters
        for wave, updater in wave_updaters:
            wave.remove_updater(updater)
        combined_wave.remove_updater(combined_updater)
