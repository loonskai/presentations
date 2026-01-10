from manim import *
from manim_revealjs import PresentationScene, NORMAL, LOOP


class Waveforms(PresentationScene):
    """Four waveforms with sound and harmonic spectrum visualization."""

    def construct(self):
        self.camera.background_color = "#282625"  # Darker to compensate for video encoding

        positions = [UP * 2.7, UP * 0.9, DOWN * 0.9, DOWN * 2.7]
        # Sorted by harmonics: Sine → Triangle → Square → Sawtooth
        base_colors = [BLUE, RED, GREEN, YELLOW]
        dim_color = GREY

        # Wave functions (sorted by harmonic content)
        def sine(x, phase):
            return np.sin(x - phase)

        def triangle(x, phase):
            t = (x - phase) / (2 * PI)
            return 2 * np.abs(2 * (t - np.floor(0.5 + t))) - 1

        def square(x, phase):
            return np.sign(np.sin(x - phase))

        def sawtooth(x, phase):
            t = (x - phase) / (2 * PI)
            return 2 * (t - np.floor(0.5 + t))

        wave_funcs = [sine, triangle, square, sawtooth]
        wave_names = ["sine", "triangle", "square", "sawtooth"]

        # Harmonic amplitudes (sorted: sine → triangle → square → sawtooth) - 12 harmonics
        sine_harmonics = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        triangle_harmonics = [1, 0, 1/9, 0, 1/25, 0, 1/49, 0, 1/81, 0, 1/121, 0]
        square_harmonics = [1, 0, 1/3, 0, 1/5, 0, 1/7, 0, 1/9, 0, 1/11, 0]
        sawtooth_harmonics = [1, 1/2, 1/3, 1/4, 1/5, 1/6, 1/7, 1/8, 1/9, 1/10, 1/11, 1/12]

        all_harmonics = [sine_harmonics, triangle_harmonics, square_harmonics, sawtooth_harmonics]

        # Create oscilloscope-style grid lines and labels
        grids = VGroup()
        labels = VGroup()
        label_names = ["Sine", "Triangle", "Square", "Sawtooth"]

        for pos, name, color in zip(positions, label_names, base_colors):
            # Line from x=-5 to x=1.5 to match wave path range
            h_line = Line(LEFT * 5 + pos, RIGHT * 1.5 + pos, stroke_width=1, stroke_opacity=0.3, color=GREY)
            grids.add(h_line)
            box = Rectangle(width=7, height=1.4, stroke_width=1, stroke_opacity=0.2, color=GREY)
            box.move_to(pos + LEFT * 1.5)
            grids.add(box)

            # Add label to the left of each wave
            label = Text(name, font_size=20, color=color, font="Menlo")
            label.next_to(box, LEFT, buff=0.2)
            labels.add(label)

        self.add(grids, labels)

        # Add section titles
        waveform_title = Text("Waveform", font_size=18, color=GREY_B, font="Menlo")
        waveform_title.move_to(UP * 3.5 + LEFT * 1.5)
        harmonics_title = Text("Harmonics", font_size=18, color=GREY_B, font="Menlo")
        harmonics_title.move_to(UP * 3.5 + RIGHT * 4.2)
        self.add(waveform_title, harmonics_title)

        # Create harmonic bars for each wave
        def create_harmonic_bars(harmonics, pos, color, opacity=1.0):
            bars = VGroup()
            bar_width = 0.18
            max_height = 0.6
            start_x = 2.8

            for i, amp in enumerate(harmonics):
                if amp > 0:
                    bar_height = amp * max_height
                    bar = Rectangle(
                        width=bar_width,
                        height=bar_height,
                        fill_color=color,
                        fill_opacity=opacity * 0.8,
                        stroke_color=color,
                        stroke_width=1,
                        stroke_opacity=opacity
                    )
                    bar.move_to([start_x + i * (bar_width + 0.06), pos[1] - 0.3 + bar_height/2, 0])
                    bars.add(bar)
                else:
                    # Add placeholder for zero amplitude
                    bar = Rectangle(
                        width=bar_width,
                        height=0.02,
                        fill_color=GREY,
                        fill_opacity=0.2,
                        stroke_width=0
                    )
                    bar.move_to([start_x + i * (bar_width + 0.06), pos[1] - 0.3, 0])
                    bars.add(bar)
            return bars

        # Create initial harmonic displays (all dimmed)
        harmonic_displays = VGroup(*[
            create_harmonic_bars(harmonics, pos, dim_color, opacity=0.3)
            for harmonics, pos in zip(all_harmonics, positions)
        ])
        self.add(harmonic_displays)

        # Create wave paths
        def get_wave_path(func, pos, color, phase_val, opacity=0.9, width=2):
            points = []
            for x in np.linspace(-5, 1.5, 200):
                t = (x + 5) / 6.5 * 4 * PI
                y = func(t, phase_val) * 0.5
                points.append([x, y + pos[1], 0])
            path = VMobject()
            path.set_points_smoothly(points)
            path.set_stroke(color, width=width, opacity=opacity)
            return path

        # Phase tracker
        phase = ValueTracker(0)

        # Create initial waves (all dimmed) - add directly without animation
        waves = [
            get_wave_path(func, pos, dim_color, 0, opacity=0.3, width=1)
            for func, pos in zip(wave_funcs, positions)
        ]
        wave_group = VGroup(*waves)
        self.add(wave_group)

        # Updater for wave animation
        current_highlight = [0]  # Track which wave is highlighted

        def update_all_waves(mob, dt):
            phase.increment_value(dt * 3)
            for i, (func, pos, base_color) in enumerate(zip(wave_funcs, positions, base_colors)):
                if i == current_highlight[0]:
                    color, opacity, width = base_color, 1.0, 3
                else:
                    color, opacity, width = dim_color, 0.3, 1
                new_path = get_wave_path(func, pos, color, phase.get_value(), opacity, width)
                mob[i].become(new_path)

        def update_harmonics(mob, dt):
            for i, (harmonics, pos, base_color) in enumerate(zip(all_harmonics, positions, base_colors)):
                if i == current_highlight[0]:
                    new_bars = create_harmonic_bars(harmonics, pos, base_color, opacity=1.0)
                else:
                    new_bars = create_harmonic_bars(harmonics, pos, dim_color, opacity=0.3)
                mob[i].become(new_bars)

        wave_group.add_updater(update_all_waves)
        harmonic_displays.add_updater(update_harmonics)
        self.add(wave_group)

        # Play each wave sound in sequence
        sound_duration = 2.0

        for i, name in enumerate(wave_names):
            current_highlight[0] = i
            self.add_sound(f"scenes/audio/{name}.wav")
            self.wait(sound_duration)

        wave_group.remove_updater(update_all_waves)
        harmonic_displays.remove_updater(update_harmonics)


class AnalogToDigital(PresentationScene):
    """Demonstrates analog to digital conversion with sampling."""

    def construct(self):
        # Title
        title = Text("Analog to Digital Conversion", font_size=48)
        self.play(Write(title))
        self.end_fragment()

        self.play(title.animate.to_edge(UP).scale(0.7))

        # Create axes
        axes = Axes(
            x_range=[0, 4 * PI, PI],
            y_range=[-1.5, 1.5, 0.5],
            x_length=10,
            y_length=4,
            axis_config={"include_tip": False},
        )
        axes_labels = axes.get_axis_labels(x_label="Time", y_label="Amplitude")

        # Continuous analog signal
        analog_label = Text("Analog Signal (Continuous)", font_size=28, color=BLUE).next_to(axes, DOWN)
        analog_wave = axes.plot(lambda x: np.sin(x) * 0.8 + 0.3 * np.sin(3 * x), color=BLUE)

        self.play(Create(axes), Write(axes_labels))
        self.play(Write(analog_label))
        self.play(Create(analog_wave), run_time=2)
        self.end_fragment()

        # Sampling points
        sample_label = Text("Sampling (Discrete Points)", font_size=28, color=YELLOW).next_to(axes, DOWN)

        sample_rate = 16
        sample_points = [i * 4 * PI / sample_rate for i in range(sample_rate + 1)]
        dots = VGroup(*[
            Dot(
                axes.c2p(x, np.sin(x) * 0.8 + 0.3 * np.sin(3 * x)),
                color=YELLOW,
                radius=0.08,
            )
            for x in sample_points
        ])

        # Vertical lines to show sampling
        sample_lines = VGroup(*[
            DashedLine(
                axes.c2p(x, 0),
                axes.c2p(x, np.sin(x) * 0.8 + 0.3 * np.sin(3 * x)),
                color=YELLOW,
                stroke_opacity=0.5,
            )
            for x in sample_points
        ])

        self.play(ReplacementTransform(analog_label, sample_label))
        self.play(Create(sample_lines), Create(dots), run_time=2)
        self.end_fragment()

        # Quantization
        quant_label = Text("Quantization (Discrete Levels)", font_size=28, color=GREEN).next_to(axes, DOWN)

        def quantize(val, levels=8):
            step = 2 / levels
            return round(val / step) * step

        quant_dots = VGroup(*[
            Dot(
                axes.c2p(x, quantize(np.sin(x) * 0.8 + 0.3 * np.sin(3 * x))),
                color=GREEN,
                radius=0.08,
            )
            for x in sample_points
        ])

        # Step function connecting quantized values
        step_lines = VGroup()
        for i in range(len(sample_points) - 1):
            x1, x2 = sample_points[i], sample_points[i + 1]
            y = quantize(np.sin(x1) * 0.8 + 0.3 * np.sin(3 * x1))
            step_lines.add(Line(
                axes.c2p(x1, y),
                axes.c2p(x2, y),
                color=GREEN,
            ))

        self.play(ReplacementTransform(sample_label, quant_label))
        self.play(
            ReplacementTransform(dots, quant_dots),
            FadeOut(sample_lines),
        )
        self.play(Create(step_lines), run_time=1.5)
        self.end_fragment()

        # Final digital representation
        digital_label = Text("Digital Signal", font_size=28, color=GREEN).next_to(axes, DOWN)

        self.play(
            FadeOut(analog_wave),
            ReplacementTransform(quant_label, digital_label),
        )
        self.end_fragment()
