#!/bin/bash

# Manim render script for presentations (using manim-revealjs)
# Usage: ./render.sh <scene_name> [quality]
# Example: ./render.sh Waveforms h

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

SCENE_NAME=$1
QUALITY=${2:-"h"}  # Default to high quality

if [ -z "$SCENE_NAME" ]; then
    echo "Usage: ./render.sh <scene_name> [quality]"
    echo ""
    echo "Available scenes:"
    echo "  - Waveforms"
    echo "  - AnalogToDigital"
    echo ""
    echo "Quality options:"
    echo "  l  - Low quality (480p)"
    echo "  m  - Medium quality (720p)"
    echo "  h  - High quality (1080p) [default]"
    echo "  k  - 4K quality"
    exit 1
fi

# Activate virtual environment if it exists
if [ -d ".venv" ]; then
    source .venv/bin/activate
else
    echo "Error: Virtual environment not found!"
    echo ""
    echo "Please set up the environment first:"
    echo "  cd manim"
    echo "  python -m venv .venv"
    echo "  source .venv/bin/activate"
    echo "  pip install -r requirements.txt"
    echo "  python setup.py"
    exit 1
fi

# Check if manim is installed
if ! command -v manim &> /dev/null; then
    echo "Error: manim not installed!"
    echo ""
    echo "Please install dependencies:"
    echo "  source .venv/bin/activate"
    echo "  pip install -r requirements.txt"
    exit 1
fi

# Generate audio files if needed (for Waveforms scene)
if [ "$SCENE_NAME" = "Waveforms" ] && [ ! -f "scenes/audio/sine.wav" ]; then
    echo "Generating audio files..."
    python scenes/generate_sounds.py
fi

# Render the scene
echo "Rendering $SCENE_NAME at quality -q$QUALITY..."
manim render -q$QUALITY scenes/waveforms.py $SCENE_NAME

# Check if render was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "Render complete!"
    echo ""

    # Find the output files
    VIDEO_FILE=$(find media/videos -name "${SCENE_NAME}.mp4" 2>/dev/null | head -1)
    JSON_FILE=$(find media/videos -name "${SCENE_NAME}.json" 2>/dev/null | head -1)

    # Create public/manim directory and copy files
    mkdir -p ../public/manim

    if [ -n "$VIDEO_FILE" ]; then
        cp "$VIDEO_FILE" ../public/manim/
        echo "Copied: $VIDEO_FILE -> public/manim/"
    fi

    if [ -n "$JSON_FILE" ]; then
        cp "$JSON_FILE" ../public/manim/
        echo "Copied: $JSON_FILE -> public/manim/"
    fi

    echo ""
    echo "Ready to use in slides:"
    echo "  <ManimVideo"
    echo "    src=\"/manim/${SCENE_NAME}.mp4\""
    echo "    playbackInfo=\"/manim/${SCENE_NAME}.json\""
    echo "  />"
fi
