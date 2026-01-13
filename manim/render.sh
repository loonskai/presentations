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
    echo "  - SoundVisualization"
    echo "  - PhaseCancellation"
    echo "  - SetupArchitecture"
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

# Determine which file contains the scene
case "$SCENE_NAME" in
    "Waveforms"|"AnalogToDigital")
        SCENE_FILE="scenes/waveforms.py"
        ;;
    "SoundVisualization")
        SCENE_FILE="scenes/sound_visualization.py"
        ;;
    "PhaseCancellation")
        SCENE_FILE="scenes/phase_cancellation.py"
        ;;
    "SetupArchitecture")
        SCENE_FILE="scenes/setup_architecture.py"
        ;;
    "Filters")
        SCENE_FILE="scenes/filters.py"
        ;;
    *)
        echo "Error: Unknown scene '$SCENE_NAME'"
        exit 1
        ;;
esac

# Render the scene
echo "Rendering $SCENE_NAME at quality -q$QUALITY..."
manim render -q$QUALITY $SCENE_FILE $SCENE_NAME

# Check if render was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "Render complete!"
    echo ""

    # Determine output directory based on quality
    case "$QUALITY" in
        "l") QUALITY_DIR="480p15" ;;
        "m") QUALITY_DIR="720p30" ;;
        "h") QUALITY_DIR="1080p60" ;;
        "k") QUALITY_DIR="2160p60" ;;
        *) QUALITY_DIR="1080p60" ;;
    esac

    # Get scene file base name (without .py)
    SCENE_BASE=$(basename "$SCENE_FILE" .py)

    # Find the output files in the correct quality directory
    VIDEO_FILE="media/videos/${SCENE_BASE}/${QUALITY_DIR}/${SCENE_NAME}.mp4"
    JSON_FILE="media/videos/${SCENE_BASE}/${QUALITY_DIR}/${SCENE_NAME}.json"

    # Create public/manim directory and copy files
    mkdir -p ../public/manim

    if [ -f "$VIDEO_FILE" ]; then
        cp "$VIDEO_FILE" ../public/manim/
        echo "Copied: $VIDEO_FILE -> public/manim/"
    else
        echo "Warning: Video file not found at $VIDEO_FILE"
    fi

    if [ -f "$JSON_FILE" ]; then
        cp "$JSON_FILE" ../public/manim/
        echo "Copied: $JSON_FILE -> public/manim/"
    else
        echo "Warning: JSON file not found at $JSON_FILE"
    fi

    echo ""
    echo "Ready to use in slides:"
    echo "  <ManimVideo"
    echo "    src=\"/manim/${SCENE_NAME}.mp4\""
    echo "    playbackInfo=\"/manim/${SCENE_NAME}.json\""
    echo "  />"
fi
