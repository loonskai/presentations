#!/usr/bin/env python3
"""Setup script to export manim-revealjs plugin to the presentation."""

import shutil
import urllib.request
from pathlib import Path

MANIM_JS_URL = "https://raw.githubusercontent.com/RickDW/manim-revealjs/master/src/manim_revealjs/manim.js"

def main():
    dest = Path("../public/manim.js")
    dest.parent.mkdir(parents=True, exist_ok=True)

    # Try to use local export first
    try:
        from manim_revealjs import plugin
        plugin.export()
        src = Path("manim.js")
        if src.exists():
            shutil.copy(src, dest)
            src.unlink()  # Clean up local copy
            print(f"Exported manim.js to {dest}")
            return
    except Exception as e:
        print(f"Local export failed: {e}")

    # Fallback: download from GitHub
    print("Downloading manim.js from GitHub...")
    try:
        urllib.request.urlretrieve(MANIM_JS_URL, dest)
        print(f"Downloaded manim.js to {dest}")
    except Exception as e:
        print(f"Error downloading: {e}")
        print(f"Please manually download from: {MANIM_JS_URL}")

if __name__ == "__main__":
    main()
