from manim import *


class SetupArchitecture(Scene):
    """Animated architecture diagram for livecoding setup."""

    def construct(self):
        self.camera.background_color = "#282625"

        # Colors matching Gruvbox theme
        box_color = "#ebdbb2"
        text_color = "#ebdbb2"
        arrow_color = "#fabd2f"  # Gruvbox yellow
        osc_color = "#8ec07c"  # Gruvbox green
        sound_color = "#83a598"  # Gruvbox blue - for audio-producing blocks

        # Paths to logos
        flok_logo_path = "../src/decks/livecoding-agent/images/flok-logo.svg"
        strudel_logo_path = "../src/decks/livecoding-agent/images/strudel-logo.png"
        supercollider_logo_path = "../src/decks/livecoding-agent/images/supercollider-logo.svg"
        nodejs_logo_path = "../src/decks/livecoding-agent/images/nodejs-logo.svg"

        # ==================== FLOK SESSION BLOCK ====================
        flok_session_box = RoundedRectangle(
            width=10, height=1.6, corner_radius=0.15,
            stroke_color=box_color, stroke_width=2, fill_opacity=0
        )
        flok_session_box.move_to(UP * 2.0)

        flok_logo = SVGMobject(flok_logo_path)
        flok_logo.scale(0.18)
        flok_logo.set_stroke(width=0)
        flok_logo.move_to(flok_session_box.get_top() + DOWN * 0.22 + LEFT * 0.85)

        flok_title = Text("Flok session", font_size=16, color=text_color, font="Menlo")
        flok_title.next_to(flok_logo, RIGHT, buff=0.08)

        # ==================== WEB AUDIO API BLOCK (dashed, sound-producing) ====================
        web_audio_box_solid = RoundedRectangle(
            width=2.4, height=0.6, corner_radius=0.08,
            stroke_color=sound_color, stroke_width=2.5, fill_opacity=0
        )
        web_audio_box = DashedVMobject(web_audio_box_solid, num_dashes=30)
        web_audio_box.move_to(LEFT * 3.3 + UP * 1.75)

        web_audio_label = Text("Web Audio API", font_size=12, color=sound_color, font="Menlo")
        web_audio_label.move_to(web_audio_box.get_center())

        # ==================== STRUDEL BLOCK ====================
        strudel_box = RoundedRectangle(
            width=2.4, height=0.6, corner_radius=0.08,
            stroke_color=box_color, stroke_width=1.5, fill_opacity=0
        )
        strudel_box.move_to(UP * 1.75)

        strudel_logo = ImageMobject(strudel_logo_path)
        strudel_logo.scale(0.1)
        strudel_label = Text("Strudel", font_size=14, color=text_color, font="Menlo")
        strudel_label.next_to(strudel_logo, RIGHT, buff=0.1)
        # Center the logo+label group in the box
        strudel_group_center = (strudel_logo.get_center() + strudel_label.get_center()) / 2
        offset = strudel_box.get_center() - strudel_group_center
        strudel_logo.shift(offset)
        strudel_label.shift(offset)

        # ==================== SUPERCOLLIDER BLOCK ====================
        supercollider_box = RoundedRectangle(
            width=2.8, height=0.6, corner_radius=0.08,
            stroke_color=box_color, stroke_width=1.5, fill_opacity=0
        )
        supercollider_box.move_to(RIGHT * 3.3 + UP * 1.75)

        supercollider_logo = SVGMobject(supercollider_logo_path)
        supercollider_logo.set_color(text_color)
        supercollider_logo.scale(0.2)
        supercollider_label = Text("SuperCollider", font_size=14, color=text_color, font="Menlo")
        supercollider_label.next_to(supercollider_logo, RIGHT, buff=0.1)
        # Center the logo+label group in the box
        sc_group_center = (supercollider_logo.get_center() + supercollider_label.get_center()) / 2
        sc_offset = supercollider_box.get_center() - sc_group_center
        supercollider_logo.shift(sc_offset)
        supercollider_label.shift(sc_offset)

        # ==================== FLOK SERVER BLOCK ====================
        flok_server_box = RoundedRectangle(
            width=10, height=0.6, corner_radius=0.15,
            stroke_color=box_color, stroke_width=2, fill_opacity=0
        )
        flok_server_box.move_to(ORIGIN)

        nodejs_logo = SVGMobject(nodejs_logo_path)
        nodejs_logo.scale(0.1)
        nodejs_logo.move_to(flok_server_box.get_center() + LEFT * 0.9)

        flok_server_title = Text("Flok server", font_size=16, color=text_color, font="Menlo")
        flok_server_title.next_to(nodejs_logo, RIGHT, buff=0.08)

        # ==================== REPL BLOCKS ====================
        strudel_repl_box = RoundedRectangle(
            width=2.2, height=0.5, corner_radius=0.08,
            stroke_color=box_color, stroke_width=1.5, fill_opacity=0
        )
        strudel_repl_box.move_to(LEFT * 1.7 + DOWN * 1.1)

        strudel_repl_label = Text("Strudel REPL", font_size=12, color=text_color, font="Menlo")
        strudel_repl_label.move_to(strudel_repl_box.get_center())

        flok_repl_box = RoundedRectangle(
            width=2.2, height=0.5, corner_radius=0.08,
            stroke_color=box_color, stroke_width=1.5, fill_opacity=0
        )
        flok_repl_box.move_to(RIGHT * 1.7 + DOWN * 1.1)

        flok_repl_label = Text("Flok REPL", font_size=12, color=text_color, font="Menlo")
        flok_repl_label.move_to(flok_repl_box.get_center())

        # ==================== SUPERCOLLIDER SERVER BLOCK (sound-producing) ====================
        sc_server_box = RoundedRectangle(
            width=10, height=0.6, corner_radius=0.15,
            stroke_color=sound_color, stroke_width=3, fill_opacity=0
        )
        sc_server_box.move_to(DOWN * 2.5)

        sc_server_logo = SVGMobject(supercollider_logo_path)
        sc_server_logo.set_color(sound_color)
        sc_server_logo.scale(0.18)
        sc_server_logo.move_to(sc_server_box.get_center() + LEFT * 1.5)

        sc_server_title = Text("SuperCollider Server", font_size=16, color=sound_color, font="Menlo")
        sc_server_title.next_to(sc_server_logo, RIGHT, buff=0.08)

        # ==================== ARROW DEFINITIONS ====================
        # WebSocket arrows (bidirectional)
        strudel_ws_start = strudel_box.get_bottom() + DOWN * 0.1
        strudel_ws_end = flok_server_box.get_top() + UP * 0.1

        sc_ws_start = supercollider_box.get_bottom() + DOWN * 0.1
        sc_ws_end = flok_server_box.get_top() + UP * 0.1 + RIGHT * 3.3

        # Server to REPL arrows
        srv_strudel_start = flok_server_box.get_bottom() + DOWN * 0.05 + LEFT * 1.7
        srv_strudel_end = strudel_repl_box.get_top() + UP * 0.05

        srv_flok_start = flok_server_box.get_bottom() + DOWN * 0.05 + RIGHT * 1.7
        srv_flok_end = flok_repl_box.get_top() + UP * 0.05

        # OSC arrows
        osc_strudel_start = strudel_repl_box.get_bottom() + DOWN * 0.05
        osc_strudel_end = sc_server_box.get_top() + UP * 0.05 + LEFT * 1.7

        osc_flok_start = flok_repl_box.get_bottom() + DOWN * 0.05
        osc_flok_end = sc_server_box.get_top() + UP * 0.05 + RIGHT * 1.7

        # Strudel to Web Audio API arrow (horizontal)
        strudel_to_webaudio_start = strudel_box.get_left() + LEFT * 0.1
        strudel_to_webaudio_end = web_audio_box.get_right() + RIGHT * 0.1

        # ==================== CREATE DASHED LINES ====================
        dash_len = 0.1

        strudel_ws_line = DashedLine(strudel_ws_start, strudel_ws_end, color=arrow_color, stroke_width=2, dash_length=dash_len)
        sc_ws_line = DashedLine(sc_ws_start, sc_ws_end, color=arrow_color, stroke_width=2, dash_length=dash_len)
        srv_strudel_line = DashedLine(srv_strudel_start, srv_strudel_end, color=arrow_color, stroke_width=2, dash_length=dash_len)
        srv_flok_line = DashedLine(srv_flok_start, srv_flok_end, color=arrow_color, stroke_width=2, dash_length=dash_len)
        osc_strudel_line = DashedLine(osc_strudel_start, osc_strudel_end, color=osc_color, stroke_width=2, dash_length=dash_len)
        osc_flok_line = DashedLine(osc_flok_start, osc_flok_end, color=osc_color, stroke_width=2, dash_length=dash_len)
        strudel_to_webaudio_line = DashedLine(strudel_to_webaudio_start, strudel_to_webaudio_end, color=arrow_color, stroke_width=2, dash_length=dash_len)

        # ==================== CREATE ARROW TIPS ====================
        tip_scale = 0.3

        # WebSocket arrows (bidirectional - tips at both ends)
        strudel_ws_tip_up = ArrowTriangleFilledTip(color=arrow_color).scale(tip_scale)
        strudel_ws_tip_up.move_to(strudel_ws_start).rotate(-PI/2)
        strudel_ws_tip_down = ArrowTriangleFilledTip(color=arrow_color).scale(tip_scale)
        strudel_ws_tip_down.move_to(strudel_ws_end).rotate(PI/2)

        sc_ws_tip_up = ArrowTriangleFilledTip(color=arrow_color).scale(tip_scale)
        sc_ws_tip_up.move_to(sc_ws_start).rotate(-PI/2)
        sc_ws_tip_down = ArrowTriangleFilledTip(color=arrow_color).scale(tip_scale)
        sc_ws_tip_down.move_to(sc_ws_end).rotate(PI/2)

        # Server to REPL arrows (single direction - pointing down)
        srv_strudel_tip = ArrowTriangleFilledTip(color=arrow_color).scale(tip_scale)
        srv_strudel_tip.move_to(srv_strudel_end).rotate(PI/2)
        srv_flok_tip = ArrowTriangleFilledTip(color=arrow_color).scale(tip_scale)
        srv_flok_tip.move_to(srv_flok_end).rotate(PI/2)

        # OSC arrows (single direction - pointing down)
        osc_strudel_tip = ArrowTriangleFilledTip(color=osc_color).scale(tip_scale)
        osc_strudel_tip.move_to(osc_strudel_end).rotate(PI/2)
        osc_flok_tip = ArrowTriangleFilledTip(color=osc_color).scale(tip_scale)
        osc_flok_tip.move_to(osc_flok_end).rotate(PI/2)

        # Strudel to Web Audio API arrow (pointing left)
        strudel_to_webaudio_tip = ArrowTriangleFilledTip(color=arrow_color).scale(tip_scale)
        strudel_to_webaudio_tip.move_to(strudel_to_webaudio_end).rotate(0)

        # ==================== LABELS WITH BACKGROUND MASKS ====================
        bg_color = "#282625"
        label_padding = 0.08

        # WebSocket label for Strudel arrow (centered on arrow)
        strudel_ws_label = Text("WebSocket", font_size=12, color=arrow_color, font="Menlo")
        strudel_ws_label.move_to((strudel_ws_start + strudel_ws_end) / 2)
        strudel_ws_bg = Rectangle(
            width=strudel_ws_label.width + label_padding * 2,
            height=strudel_ws_label.height + label_padding * 2,
            fill_color=bg_color, fill_opacity=1, stroke_width=0
        )
        strudel_ws_bg.move_to(strudel_ws_label.get_center())

        # WebSocket label for SuperCollider arrow (centered on arrow)
        sc_ws_label = Text("WebSocket", font_size=12, color=arrow_color, font="Menlo")
        sc_ws_label.move_to((sc_ws_start + sc_ws_end) / 2)
        sc_ws_bg = Rectangle(
            width=sc_ws_label.width + label_padding * 2,
            height=sc_ws_label.height + label_padding * 2,
            fill_color=bg_color, fill_opacity=1, stroke_width=0
        )
        sc_ws_bg.move_to(sc_ws_label.get_center())

        # OSC label for Strudel REPL arrow (centered on arrow)
        strudel_osc_label = Text("OSC", font_size=12, color=osc_color, font="Menlo")
        strudel_osc_label.move_to((osc_strudel_start + osc_strudel_end) / 2)
        strudel_osc_bg = Rectangle(
            width=strudel_osc_label.width + label_padding * 2,
            height=strudel_osc_label.height + label_padding * 2,
            fill_color=bg_color, fill_opacity=1, stroke_width=0
        )
        strudel_osc_bg.move_to(strudel_osc_label.get_center())

        # OSC label for Flok REPL arrow (centered on arrow)
        flok_osc_label = Text("OSC", font_size=12, color=osc_color, font="Menlo")
        flok_osc_label.move_to((osc_flok_start + osc_flok_end) / 2)
        flok_osc_bg = Rectangle(
            width=flok_osc_label.width + label_padding * 2,
            height=flok_osc_label.height + label_padding * 2,
            fill_color=bg_color, fill_opacity=1, stroke_width=0
        )
        flok_osc_bg.move_to(flok_osc_label.get_center())

        # ==================== ADD ALL STATIC ELEMENTS ====================
        self.add(
            # Boxes
            flok_session_box, flok_logo, flok_title,
            web_audio_box, web_audio_label,
            strudel_box, strudel_logo, strudel_label,
            supercollider_box, supercollider_logo, supercollider_label,
            flok_server_box, nodejs_logo, flok_server_title,
            strudel_repl_box, strudel_repl_label,
            flok_repl_box, flok_repl_label,
            sc_server_box, sc_server_logo, sc_server_title,
            # Arrow tips
            strudel_ws_tip_up, strudel_ws_tip_down,
            sc_ws_tip_up, sc_ws_tip_down,
            srv_strudel_tip, srv_flok_tip,
            osc_strudel_tip, osc_flok_tip,
            strudel_to_webaudio_tip,
        )

        # ==================== ANIMATED DASHED LINES ====================
        # Store line data for updaters
        line_data = [
            (strudel_ws_line, strudel_ws_start, strudel_ws_end, arrow_color, 1),
            (sc_ws_line, sc_ws_start, sc_ws_end, arrow_color, 1),
            (srv_strudel_line, srv_strudel_start, srv_strudel_end, arrow_color, 1),
            (srv_flok_line, srv_flok_start, srv_flok_end, arrow_color, 1),
            (osc_strudel_line, osc_strudel_start, osc_strudel_end, osc_color, 1),
            (osc_flok_line, osc_flok_start, osc_flok_end, osc_color, 1),
            (strudel_to_webaudio_line, strudel_to_webaudio_start, strudel_to_webaudio_end, arrow_color, 1),
        ]

        # Add lines to scene
        for line, _, _, _, _ in line_data:
            self.add(line)

        # Add label backgrounds and labels ON TOP of lines
        self.add(
            strudel_ws_bg, sc_ws_bg,
            strudel_osc_bg, flok_osc_bg,
            strudel_ws_label, sc_ws_label,
            strudel_osc_label, flok_osc_label,
        )

        # Create time tracker for animation
        time = ValueTracker(0)

        # Create updater for each line - line ends before arrow tip to avoid overflow
        def make_line_updater(start, end, color):
            direction = (end - start) / np.linalg.norm(end - start)
            # Shorten line at end to leave room for arrow tip and animation offset
            margin = dash_len * 2.5
            actual_end = end - direction * margin
            def updater(mob):
                t = time.get_value()
                offset = (t * 0.4) % (dash_len * 2)
                new_line = DashedLine(
                    start, actual_end,
                    color=color,
                    stroke_width=2,
                    dash_length=dash_len,
                )
                new_line.shift(direction * offset)
                mob.become(new_line)
            return updater

        # Apply updaters
        strudel_ws_line.add_updater(make_line_updater(strudel_ws_start, strudel_ws_end, arrow_color))
        sc_ws_line.add_updater(make_line_updater(sc_ws_start, sc_ws_end, arrow_color))
        srv_strudel_line.add_updater(make_line_updater(srv_strudel_start, srv_strudel_end, arrow_color))
        srv_flok_line.add_updater(make_line_updater(srv_flok_start, srv_flok_end, arrow_color))
        osc_strudel_line.add_updater(make_line_updater(osc_strudel_start, osc_strudel_end, osc_color))
        osc_flok_line.add_updater(make_line_updater(osc_flok_start, osc_flok_end, osc_color))
        strudel_to_webaudio_line.add_updater(make_line_updater(strudel_to_webaudio_start, strudel_to_webaudio_end, arrow_color))

        # Animate time tracker
        self.play(time.animate.set_value(10), run_time=10, rate_func=linear)
