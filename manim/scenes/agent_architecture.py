from manim import *


class AgentArchitecture(Scene):
    """Animated architecture diagram for livecoding setup with AI agent."""

    def construct(self):
        self.camera.background_color = "#282625"

        # Colors matching Gruvbox theme
        box_color = "#ebdbb2"
        text_color = "#ebdbb2"
        arrow_color = "#fabd2f"  # Gruvbox yellow
        osc_color = "#8ec07c"  # Gruvbox green
        sound_color = "#83a598"  # Gruvbox blue - for audio-producing blocks
        ai_color = "#d3869b"  # Gruvbox purple - for AI components

        # Paths to logos
        flok_logo_path = "../src/decks/livecoding-agent/images/flok-logo.svg"
        strudel_logo_path = "../src/decks/livecoding-agent/images/strudel-logo.png"
        supercollider_logo_path = "../src/decks/livecoding-agent/images/supercollider-logo.svg"
        nodejs_logo_path = "../src/decks/livecoding-agent/images/nodejs-logo.svg"
        claude_logo_path = "../src/decks/livecoding-agent/images/claude-logo.svg"

        # ==================== FLOK SESSION BLOCK ====================
        flok_session_box = RoundedRectangle(
            width=10, height=1.6, corner_radius=0.15,
            stroke_color=box_color, stroke_width=2, fill_opacity=0
        )
        flok_session_box.move_to(UP * 2.6)

        flok_logo = SVGMobject(flok_logo_path)
        flok_logo.scale(0.18)
        flok_logo.set_stroke(width=0)
        flok_logo.move_to(flok_session_box.get_top() + DOWN * 0.22 + LEFT * 0.85)

        flok_title = Text("Flok session", font_size=16, color=text_color, font="Menlo")
        flok_title.next_to(flok_logo, RIGHT, buff=0.08)

        # ==================== WEB AUDIO API BLOCK (dashed, sound-producing) ====================
        web_audio_box_solid = RoundedRectangle(
            width=2.0, height=0.5, corner_radius=0.08,
            stroke_color=sound_color, stroke_width=2.5, fill_opacity=0
        )
        web_audio_box = DashedVMobject(web_audio_box_solid, num_dashes=25)
        web_audio_box.move_to(LEFT * 3.8 + UP * 2.35)

        web_audio_label = Text("Web Audio API", font_size=12, color=text_color, font="Menlo")
        web_audio_label.move_to(web_audio_box.get_center())

        # ==================== ABLETON LIVE (DAW) BLOCK (sound-producing) ====================
        ableton_logo_path = "../src/decks/livecoding-agent/images/ableton-logo.svg"

        ableton_box = RoundedRectangle(
            width=2.6, height=0.5, corner_radius=0.08,
            stroke_color=sound_color, stroke_width=2.5, fill_opacity=0
        )
        ableton_box.move_to(LEFT * 3.8 + UP * 1.05)

        ableton_logo = SVGMobject(ableton_logo_path)
        ableton_logo.set_color(text_color)
        ableton_logo.scale(0.08)
        ableton_label = Text("Ableton Live (DAW)", font_size=10, color=text_color, font="Menlo")
        ableton_label.next_to(ableton_logo, RIGHT, buff=0.08)
        ableton_content = VGroup(ableton_logo, ableton_label)
        ableton_content.move_to(ableton_box.get_center())

        # ==================== STRUDEL BLOCK ====================
        strudel_box = RoundedRectangle(
            width=1.6, height=0.5, corner_radius=0.08,
            stroke_color=box_color, stroke_width=1.5, fill_opacity=0
        )
        strudel_box.move_to(LEFT * 1.3 + UP * 2.35)

        strudel_logo = ImageMobject(strudel_logo_path)
        strudel_logo.scale(0.08)
        strudel_label = Text("Strudel", font_size=12, color=text_color, font="Menlo")
        strudel_label.next_to(strudel_logo, RIGHT, buff=0.06)
        strudel_group_center = (strudel_logo.get_center() + strudel_label.get_center()) / 2
        offset = strudel_box.get_center() - strudel_group_center
        strudel_logo.shift(offset)
        strudel_label.shift(offset)

        # ==================== SUPERCOLLIDER BLOCK ====================
        supercollider_box = RoundedRectangle(
            width=2.1, height=0.5, corner_radius=0.08,
            stroke_color=box_color, stroke_width=1.5, fill_opacity=0
        )
        supercollider_box.move_to(RIGHT * 0.9 + UP * 2.35)

        supercollider_logo = SVGMobject(supercollider_logo_path)
        supercollider_logo.set_color(text_color)
        supercollider_logo.scale(0.16)
        supercollider_label = Text("SuperCollider", font_size=11, color=text_color, font="Menlo")
        supercollider_label.next_to(supercollider_logo, RIGHT, buff=0.06)
        supercollider_content = VGroup(supercollider_logo, supercollider_label)
        supercollider_content.move_to(supercollider_box.get_center())

        # ==================== CLAUDE (LLM CHAT) BLOCK ====================
        claude_box = RoundedRectangle(
            width=1.8, height=0.5, corner_radius=0.08,
            stroke_color=ai_color, stroke_width=2.5, fill_opacity=0
        )
        claude_box.move_to(RIGHT * 3.3 + UP * 2.35)

        claude_logo = SVGMobject(claude_logo_path)
        claude_logo.scale(0.18)
        claude_logo.move_to(claude_box.get_center())

        # ==================== FLOK SERVER BLOCK ====================
        flok_server_box = RoundedRectangle(
            width=10, height=1.3, corner_radius=0.15,
            stroke_color=box_color, stroke_width=2, fill_opacity=0
        )
        flok_server_box.move_to(DOWN * 0.35)

        nodejs_logo = SVGMobject(nodejs_logo_path)
        nodejs_logo.scale(0.1)
        nodejs_logo.move_to(flok_server_box.get_left() + RIGHT * 0.5)

        flok_server_title = Text("Flok server", font_size=16, color=text_color, font="Menlo")
        flok_server_title.next_to(nodejs_logo, RIGHT, buff=0.08)

        # ==================== /api/chat BLOCK (inside Flok server) ====================
        api_chat_box = RoundedRectangle(
            width=5.5, height=1.1, corner_radius=0.08,
            stroke_color=ai_color, stroke_width=1.5, fill_opacity=0
        )
        api_chat_box.move_to(RIGHT * 2.05 + DOWN * 0.35)

        api_chat_label = Text("/api/chat", font_size=10, color=text_color, font="Menlo")
        api_chat_label.move_to(api_chat_box.get_left() + RIGHT * 0.6)

        # Sub-blocks inside /api/chat
        context7_box = RoundedRectangle(
            width=1.8, height=0.4, corner_radius=0.05,
            stroke_color=osc_color, stroke_width=1.5, fill_opacity=0
        )
        context7_box.move_to(api_chat_box.get_right() + LEFT * 1.1 + UP * 0.28)
        context7_label = Text("Context7", font_size=11, color=text_color, font="Menlo")
        context7_label.move_to(context7_box.get_center())

        synthdefs_box = RoundedRectangle(
            width=1.8, height=0.4, corner_radius=0.05,
            stroke_color=osc_color, stroke_width=1.5, fill_opacity=0
        )
        synthdefs_box.move_to(api_chat_box.get_right() + LEFT * 1.1 + DOWN * 0.28)
        synthdefs_label = Text("get_sclang_synthdefs", font_size=7, color=text_color, font="Menlo")
        synthdefs_label.move_to(synthdefs_box.get_center())

        # ==================== DOCS BLOCK (to the right of Flok server, aligned with Context7) ====================
        docs_box = RoundedRectangle(
            width=1.2, height=0.5, corner_radius=0.08,
            stroke_color=osc_color, stroke_width=1.5, fill_opacity=0
        )
        docs_box.next_to(flok_server_box, RIGHT, buff=0.3)
        docs_box.set_y(context7_box.get_center()[1])  # Align with Context7
        docs_label = Text("Docs", font_size=12, color=text_color, font="Menlo")
        docs_label.move_to(docs_box.get_center())

        # ==================== REPL BLOCKS ====================
        strudel_repl_box = RoundedRectangle(
            width=2.2, height=0.5, corner_radius=0.08,
            stroke_color=box_color, stroke_width=1.5, fill_opacity=0
        )
        strudel_repl_box.move_to(LEFT * 1.7 + DOWN * 1.8)

        strudel_repl_label = Text("Strudel REPL", font_size=12, color=text_color, font="Menlo")
        strudel_repl_label.move_to(strudel_repl_box.get_center())

        flok_repl_box = RoundedRectangle(
            width=2.2, height=0.5, corner_radius=0.08,
            stroke_color=box_color, stroke_width=1.5, fill_opacity=0
        )
        flok_repl_box.move_to(RIGHT * 1.7 + DOWN * 1.8)

        flok_repl_label = Text("Flok REPL", font_size=12, color=text_color, font="Menlo")
        flok_repl_label.move_to(flok_repl_box.get_center())

        # ==================== SUPERCOLLIDER SERVER BLOCK (sound-producing) ====================
        sc_server_box = RoundedRectangle(
            width=10, height=0.6, corner_radius=0.15,
            stroke_color=sound_color, stroke_width=3, fill_opacity=0
        )
        sc_server_box.move_to(DOWN * 3.2)

        sc_server_logo = SVGMobject(supercollider_logo_path)
        sc_server_logo.set_color(text_color)
        sc_server_logo.scale(0.18)
        sc_server_logo.move_to(sc_server_box.get_center() + LEFT * 1.5)

        sc_server_title = Text("SuperCollider Server", font_size=16, color=text_color, font="Menlo")
        sc_server_title.next_to(sc_server_logo, RIGHT, buff=0.08)

        # ==================== ARROW DEFINITIONS ====================
        # WebSocket arrows (bidirectional)
        strudel_ws_start = strudel_box.get_bottom() + DOWN * 0.1
        strudel_ws_end = flok_server_box.get_top() + UP * 0.1 + LEFT * 1.3

        sc_ws_start = supercollider_box.get_bottom() + DOWN * 0.1
        sc_ws_end = flok_server_box.get_top() + UP * 0.1 + RIGHT * 0.9

        # Claude to /api/chat arrow (straight vertical)
        claude_to_api_start = claude_box.get_bottom() + DOWN * 0.1
        claude_to_api_end = np.array([claude_box.get_center()[0], api_chat_box.get_top()[1] + 0.1, 0])

        # Branching arrows from Claude: first to SuperCollider, then continues to Strudel
        claude_arrows_start = claude_box.get_top() + UP * 0.1
        claude_arrows_height = claude_box.get_top()[1] + 0.35
        corner_gap = 0.15  # Gap to prevent animation overflow at corners

        # Corner positions
        claude_corner = np.array([claude_arrows_start[0], claude_arrows_height, 0])
        sc_corner = np.array([supercollider_box.get_center()[0], claude_arrows_height, 0])
        strudel_corner = np.array([strudel_box.get_center()[0], claude_arrows_height, 0])

        # Arrow 1: Claude → up → left to SC → down to SuperCollider
        # Segment 1: vertical up from Claude (ends before horizontal)
        arrow1_seg1_start = claude_arrows_start
        arrow1_seg1_end = claude_corner + DOWN * corner_gap
        # Segment 2: horizontal from Claude corner to SC corner (shortened on both ends)
        arrow1_seg2_start = claude_corner + LEFT * corner_gap
        arrow1_seg2_end = sc_corner + RIGHT * corner_gap
        # Segment 3: vertical down to SuperCollider (starts below horizontal)
        arrow1_seg3_start = sc_corner + DOWN * corner_gap
        arrow1_seg3_end = supercollider_box.get_top()

        # Arrow 2: Continues from SC corner → left to Strudel → down
        # Segment 1: horizontal from SC corner to Strudel corner (shortened on both ends)
        arrow2_seg1_start = sc_corner + LEFT * corner_gap
        arrow2_seg1_end = strudel_corner + RIGHT * corner_gap
        # Segment 2: vertical down to Strudel (starts below horizontal)
        arrow2_seg2_start = strudel_corner + DOWN * corner_gap
        arrow2_seg2_end = strudel_box.get_top()

        # Server to REPL arrows
        srv_strudel_start = flok_server_box.get_bottom() + DOWN * 0.05 + LEFT * 1.7
        srv_strudel_end = strudel_repl_box.get_top() + UP * 0.05

        srv_flok_start = flok_server_box.get_bottom() + DOWN * 0.05 + RIGHT * 1.7
        srv_flok_end = flok_repl_box.get_top() + UP * 0.05

        # OSC arrows from REPLs to SC Server
        osc_strudel_start = strudel_repl_box.get_bottom() + DOWN * 0.05
        osc_strudel_end = sc_server_box.get_top() + UP * 0.05 + LEFT * 1.7

        osc_flok_start = flok_repl_box.get_bottom() + DOWN * 0.05
        osc_flok_end = sc_server_box.get_top() + UP * 0.05 + RIGHT * 1.7

        # OSC arrow from get_sclang_synthdefs to SuperCollider Server (bidirectional)
        synthdefs_osc_start = synthdefs_box.get_bottom() + DOWN * 0.05
        synthdefs_osc_end = sc_server_box.get_top() + UP * 0.05 + RIGHT * 3.7

        # Strudel to Web Audio API arrow (horizontal)
        strudel_to_webaudio_start = strudel_box.get_left() + LEFT * 0.1
        strudel_to_webaudio_end = web_audio_box.get_right() + RIGHT * 0.1

        # Strudel to Ableton Live arrow (diagonal)
        strudel_to_ableton_start = strudel_box.get_left() + LEFT * 0.1 + DOWN * 0.15
        strudel_to_ableton_end = ableton_box.get_top() + UP * 0.1

        # Context7 to Docs arrow (horizontal)
        context7_to_docs_start = context7_box.get_right() + RIGHT * 0.1
        context7_to_docs_end = docs_box.get_left() + LEFT * 0.1

        # ==================== CREATE DASHED LINES ====================
        dash_len = 0.1
        dash_len_long = 0.2  # For horizontal branching arrows

        strudel_ws_line = DashedLine(strudel_ws_start, strudel_ws_end, color=arrow_color, stroke_width=2, dash_length=dash_len)
        sc_ws_line = DashedLine(sc_ws_start, sc_ws_end, color=arrow_color, stroke_width=2, dash_length=dash_len)
        claude_to_api_line = DashedLine(claude_to_api_start, claude_to_api_end, color=ai_color, stroke_width=2, dash_length=dash_len)
        # Arrow 1: Claude to SuperCollider (3 segments) - vertical lines are solid
        arrow1_line1 = Line(arrow1_seg1_start, arrow1_seg1_end, color=ai_color, stroke_width=2)
        arrow1_line2 = DashedLine(arrow1_seg2_start, arrow1_seg2_end, color=ai_color, stroke_width=2, dash_length=dash_len)
        arrow1_line3 = Line(arrow1_seg3_start, arrow1_seg3_end, color=ai_color, stroke_width=2)
        # Arrow 2: SC corner to Strudel (2 segments) - vertical line is solid
        arrow2_line1 = DashedLine(arrow2_seg1_start, arrow2_seg1_end, color=ai_color, stroke_width=2, dash_length=dash_len)
        arrow2_line2 = Line(arrow2_seg2_start, arrow2_seg2_end, color=ai_color, stroke_width=2)
        srv_strudel_line = DashedLine(srv_strudel_start, srv_strudel_end, color=arrow_color, stroke_width=2, dash_length=dash_len)
        srv_flok_line = DashedLine(srv_flok_start, srv_flok_end, color=arrow_color, stroke_width=2, dash_length=dash_len)
        osc_strudel_line = DashedLine(osc_strudel_start, osc_strudel_end, color=osc_color, stroke_width=2, dash_length=dash_len)
        osc_flok_line = DashedLine(osc_flok_start, osc_flok_end, color=osc_color, stroke_width=2, dash_length=dash_len)
        synthdefs_osc_line = DashedLine(synthdefs_osc_start, synthdefs_osc_end, color=osc_color, stroke_width=2, dash_length=dash_len)
        strudel_to_webaudio_line = DashedLine(strudel_to_webaudio_start, strudel_to_webaudio_end, color=arrow_color, stroke_width=2, dash_length=dash_len)
        strudel_to_ableton_line = DashedLine(strudel_to_ableton_start, strudel_to_ableton_end, color=arrow_color, stroke_width=2, dash_length=dash_len)
        context7_to_docs_line = DashedLine(context7_to_docs_start, context7_to_docs_end, color=osc_color, stroke_width=2, dash_length=dash_len)

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

        # Claude to /api/chat (bidirectional)
        claude_to_api_tip_up = ArrowTriangleFilledTip(color=ai_color).scale(tip_scale)
        claude_to_api_tip_up.move_to(claude_to_api_start).rotate(-PI/2)
        claude_to_api_tip_down = ArrowTriangleFilledTip(color=ai_color).scale(tip_scale)
        claude_to_api_tip_down.move_to(claude_to_api_end).rotate(PI/2)

        # Arrow 1 tip: pointing down to SuperCollider (on top of block)
        arrow1_tip = ArrowTriangleFilledTip(color=ai_color).scale(tip_scale)
        arrow1_tip.move_to(arrow1_seg3_end + UP * 0.08).rotate(PI/2)

        # Arrow 2 tip: pointing down to Strudel (on top of block)
        arrow2_tip = ArrowTriangleFilledTip(color=ai_color).scale(tip_scale)
        arrow2_tip.move_to(arrow2_seg2_end + UP * 0.08).rotate(PI/2)

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

        # Synthdefs to SC Server (bidirectional)
        synthdefs_osc_tip_up = ArrowTriangleFilledTip(color=osc_color).scale(tip_scale)
        synthdefs_osc_tip_up.move_to(synthdefs_osc_start).rotate(-PI/2)
        synthdefs_osc_tip_down = ArrowTriangleFilledTip(color=osc_color).scale(tip_scale)
        synthdefs_osc_tip_down.move_to(synthdefs_osc_end).rotate(PI/2)

        # Strudel to Web Audio API arrow (pointing left)
        strudel_to_webaudio_tip = ArrowTriangleFilledTip(color=arrow_color).scale(tip_scale)
        strudel_to_webaudio_tip.move_to(strudel_to_webaudio_end).rotate(0)

        # Strudel to Ableton arrow (pointing down-left)
        strudel_to_ableton_direction = strudel_to_ableton_end - strudel_to_ableton_start
        strudel_to_ableton_angle = np.arctan2(strudel_to_ableton_direction[1], strudel_to_ableton_direction[0])
        strudel_to_ableton_tip = ArrowTriangleFilledTip(color=arrow_color).scale(tip_scale)
        strudel_to_ableton_tip.move_to(strudel_to_ableton_end).rotate(strudel_to_ableton_angle + PI)

        # Context7 to Docs arrow tip (pointing right)
        context7_to_docs_tip = ArrowTriangleFilledTip(color=osc_color).scale(tip_scale)
        context7_to_docs_tip.move_to(context7_to_docs_end).rotate(PI)

        # ==================== LABELS WITH BACKGROUND MASKS ====================
        bg_color = "#282625"
        label_padding = 0.08

        # Common Y position for all WebSocket labels
        ws_label_y = UP * 1.0

        # WebSocket label for Strudel arrow (centered on arrow)
        strudel_ws_label = Text("WebSocket", font_size=10, color=arrow_color, font="Menlo")
        strudel_ws_label.move_to(LEFT * 1.3 + ws_label_y)
        strudel_ws_bg = Rectangle(
            width=strudel_ws_label.width + label_padding * 2,
            height=strudel_ws_label.height + label_padding * 2,
            fill_color=bg_color, fill_opacity=1, stroke_width=0
        )
        strudel_ws_bg.move_to(strudel_ws_label.get_center())

        # WebSocket label for SuperCollider arrow (centered on arrow)
        sc_ws_label = Text("WebSocket", font_size=10, color=arrow_color, font="Menlo")
        sc_ws_label.move_to(RIGHT * 0.9 + ws_label_y)
        sc_ws_bg = Rectangle(
            width=sc_ws_label.width + label_padding * 2,
            height=sc_ws_label.height + label_padding * 2,
            fill_color=bg_color, fill_opacity=1, stroke_width=0
        )
        sc_ws_bg.move_to(sc_ws_label.get_center())

        # WebSocket label for Claude to /api/chat
        claude_ws_label = Text("WebSocket", font_size=10, color=ai_color, font="Menlo")
        claude_ws_label.move_to(RIGHT * 3.3 + ws_label_y)
        claude_ws_bg = Rectangle(
            width=claude_ws_label.width + label_padding * 2,
            height=claude_ws_label.height + label_padding * 2,
            fill_color=bg_color, fill_opacity=1, stroke_width=0
        )
        claude_ws_bg.move_to(claude_ws_label.get_center())

        # OSC label for Strudel REPL arrow (centered on arrow)
        strudel_osc_label = Text("OSC", font_size=10, color=osc_color, font="Menlo")
        strudel_osc_label.move_to((osc_strudel_start + osc_strudel_end) / 2)
        strudel_osc_bg = Rectangle(
            width=strudel_osc_label.width + label_padding * 2,
            height=strudel_osc_label.height + label_padding * 2,
            fill_color=bg_color, fill_opacity=1, stroke_width=0
        )
        strudel_osc_bg.move_to(strudel_osc_label.get_center())

        # OSC label for Flok REPL arrow (centered on arrow)
        flok_osc_label = Text("OSC", font_size=10, color=osc_color, font="Menlo")
        flok_osc_label.move_to((osc_flok_start + osc_flok_end) / 2)
        flok_osc_bg = Rectangle(
            width=flok_osc_label.width + label_padding * 2,
            height=flok_osc_label.height + label_padding * 2,
            fill_color=bg_color, fill_opacity=1, stroke_width=0
        )
        flok_osc_bg.move_to(flok_osc_label.get_center())

        # OSC label for synthdefs to SC Server arrow
        synthdefs_osc_label = Text("OSC", font_size=10, color=osc_color, font="Menlo")
        synthdefs_osc_label.move_to((synthdefs_osc_start + synthdefs_osc_end) / 2 + RIGHT * 0.25)
        synthdefs_osc_bg = Rectangle(
            width=synthdefs_osc_label.width + label_padding * 2,
            height=synthdefs_osc_label.height + label_padding * 2,
            fill_color=bg_color, fill_opacity=1, stroke_width=0
        )
        synthdefs_osc_bg.move_to(synthdefs_osc_label.get_center())

        # MIDI label for Strudel to Ableton arrow (centered on arrow)
        midi_label = Text("MIDI", font_size=10, color=arrow_color, font="Menlo")
        midi_label.move_to((strudel_to_ableton_start + strudel_to_ableton_end) / 2)
        midi_bg = Rectangle(
            width=midi_label.width + label_padding * 2,
            height=midi_label.height + label_padding * 2,
            fill_color=bg_color, fill_opacity=1, stroke_width=0
        )
        midi_bg.move_to(midi_label.get_center())

        # ==================== ADD ALL STATIC ELEMENTS ====================
        self.add(
            # Boxes
            flok_session_box, flok_logo, flok_title,
            web_audio_box, web_audio_label,
            ableton_box, ableton_content,
            strudel_box, strudel_logo, strudel_label,
            supercollider_box, supercollider_content,
            claude_box, claude_logo,
            flok_server_box, nodejs_logo, flok_server_title,
            api_chat_box, api_chat_label,
            context7_box, context7_label,
            synthdefs_box, synthdefs_label,
            docs_box, docs_label,
            strudel_repl_box, strudel_repl_label,
            flok_repl_box, flok_repl_label,
            sc_server_box, sc_server_logo, sc_server_title,
            # Arrow tips
            strudel_ws_tip_up, strudel_ws_tip_down,
            sc_ws_tip_up, sc_ws_tip_down,
            claude_to_api_tip_up, claude_to_api_tip_down,
            arrow1_tip, arrow2_tip,
            srv_strudel_tip, srv_flok_tip,
            osc_strudel_tip, osc_flok_tip,
            synthdefs_osc_tip_up, synthdefs_osc_tip_down,
            strudel_to_webaudio_tip,
            strudel_to_ableton_tip,
            context7_to_docs_tip,
        )

        # ==================== ANIMATED DASHED LINES ====================
        # Add lines to scene
        lines = [
            strudel_ws_line, sc_ws_line, claude_to_api_line,
            arrow1_line1, arrow1_line2, arrow1_line3,
            arrow2_line1, arrow2_line2,
            srv_strudel_line, srv_flok_line,
            osc_strudel_line, osc_flok_line, synthdefs_osc_line,
            strudel_to_webaudio_line, strudel_to_ableton_line,
            context7_to_docs_line,
        ]
        for line in lines:
            self.add(line)

        # Add label backgrounds and labels ON TOP of lines
        self.add(
            strudel_ws_bg, sc_ws_bg, claude_ws_bg,
            strudel_osc_bg, flok_osc_bg, synthdefs_osc_bg,
            midi_bg,
            strudel_ws_label, sc_ws_label, claude_ws_label,
            strudel_osc_label, flok_osc_label, synthdefs_osc_label,
            midi_label,
        )

        # Create time tracker for animation
        time = ValueTracker(0)

        # Create updater for each line - line ends before arrow tip to avoid overflow
        def make_line_updater(start, end, color, use_margin=True, dash_length=dash_len):
            line_length = np.linalg.norm(end - start)
            if line_length < 0.01:  # Handle zero-length lines
                return lambda mob: None
            direction = (end - start) / line_length
            # Cap margin to ensure line is at least dash_length long
            max_margin = max(0, line_length - dash_length * 2)
            margin = min(dash_length * 2.5, max_margin) if use_margin else 0
            actual_end = end - direction * margin
            def updater(mob):
                t = time.get_value()
                offset = (t * 0.4) % (dash_length * 2)
                new_line = DashedLine(
                    start, actual_end,
                    color=color,
                    stroke_width=2,
                    dash_length=dash_length,
                )
                new_line.shift(direction * offset)
                mob.become(new_line)
            return updater

        # Apply updaters
        strudel_ws_line.add_updater(make_line_updater(strudel_ws_start, strudel_ws_end, arrow_color))
        sc_ws_line.add_updater(make_line_updater(sc_ws_start, sc_ws_end, arrow_color))
        claude_to_api_line.add_updater(make_line_updater(claude_to_api_start, claude_to_api_end, ai_color))
        # Arrow 1 & 2: vertical lines are static (with longer dashes), horizontal lines are animated
        arrow1_line2.add_updater(make_line_updater(arrow1_seg2_start, arrow1_seg2_end, ai_color, use_margin=False))
        arrow2_line1.add_updater(make_line_updater(arrow2_seg1_start, arrow2_seg1_end, ai_color, use_margin=False))
        srv_strudel_line.add_updater(make_line_updater(srv_strudel_start, srv_strudel_end, arrow_color))
        srv_flok_line.add_updater(make_line_updater(srv_flok_start, srv_flok_end, arrow_color))
        osc_strudel_line.add_updater(make_line_updater(osc_strudel_start, osc_strudel_end, osc_color))
        osc_flok_line.add_updater(make_line_updater(osc_flok_start, osc_flok_end, osc_color))
        synthdefs_osc_line.add_updater(make_line_updater(synthdefs_osc_start, synthdefs_osc_end, osc_color))
        strudel_to_webaudio_line.add_updater(make_line_updater(strudel_to_webaudio_start, strudel_to_webaudio_end, arrow_color))
        strudel_to_ableton_line.add_updater(make_line_updater(strudel_to_ableton_start, strudel_to_ableton_end, arrow_color))
        context7_to_docs_line.add_updater(make_line_updater(context7_to_docs_start, context7_to_docs_end, osc_color))

        # Animate time tracker
        self.play(time.animate.set_value(10), run_time=10, rate_func=linear)
