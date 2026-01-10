# Manim Animations

Interactive Manim animations for the presentations using **manim-revealjs**.

## Setup

1. Create a Python virtual environment:

```bash
cd manim
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Export the manim.js plugin:

```bash
python setup.py
```

Note: On macOS, you may also need to install system dependencies:

```bash
brew install ffmpeg pango
```

## Creating Animations

Animations use `PresentationScene` from manim-revealjs. Call `end_fragment()` to create interactive pause points:

```python
from manim import *
from manim_revealjs import PresentationScene

class MyAnimation(PresentationScene):
    def construct(self):
        title = Text("Hello")
        self.play(Write(title))
        self.end_fragment()  # Click to advance past this point

        self.play(title.animate.scale(2))
        self.end_fragment()
```

## Rendering

Use the render script:

```bash
./render.sh Waveforms       # High quality (1080p)
./render.sh Waveforms l     # Low quality (480p)
./render.sh Waveforms k     # 4K quality
```

Or manually:

```bash
source .venv/bin/activate
manim render -qh scenes/waveforms.py Waveforms
```

## Embedding in React Slides

1. Copy the rendered files to public folder:

```bash
mkdir -p ../public/manim
cp media/videos/waveforms/1080p60/Waveforms.mp4 ../public/manim/
cp media/videos/waveforms/1080p60/Waveforms.json ../public/manim/
```

2. Use the ManimVideo component in your slides:

```tsx
import { ManimVideo } from "../../components/ManimVideo";

<section id="waveforms">
  <div className="container tw:justify-center">
    <h1>Waveforms</h1>
    <ManimVideo
      src="/manim/Waveforms.mp4"
      playbackInfo="/manim/Waveforms.json"
      className="tw:rounded-2xl tw:max-h-[450px]"
    />
  </div>
</section>
```

The animation will advance to the next fragment each time you click on it.

## Available Scenes

- **Waveforms** - Basic waveform types (sine, square, sawtooth, triangle)
- **AnalogToDigital** - Demonstrates sampling and quantization

## Fragment Types

When calling `end_fragment()`, you can specify behavior:

```python
from manim_revealjs import NORMAL, LOOP, COMPLETE_LOOP, NO_PAUSE

self.end_fragment(fragment_type=LOOP)  # Loop until clicked
```

- `NORMAL` - Play once, pause at end (default)
- `LOOP` - Loop continuously until clicked
- `COMPLETE_LOOP` - Complete current loop before advancing
- `NO_PAUSE` - Play and immediately continue to next fragment
