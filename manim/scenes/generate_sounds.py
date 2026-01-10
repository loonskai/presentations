#!/usr/bin/env python3
"""Generate audio files for each waveform type."""

import numpy as np
from scipy.io import wavfile
import os

# Audio parameters
SAMPLE_RATE = 44100
DURATION = 2.0  # seconds per wave
FREQUENCY = 220  # Hz (A3 note)
AMPLITUDE = 0.5

def generate_sine(t, freq):
    return np.sin(2 * np.pi * freq * t)

def generate_square(t, freq):
    return np.sign(np.sin(2 * np.pi * freq * t))

def generate_sawtooth(t, freq):
    return 2 * (t * freq - np.floor(0.5 + t * freq))

def generate_triangle(t, freq):
    return 2 * np.abs(2 * (t * freq - np.floor(0.5 + t * freq))) - 1

def apply_envelope(signal, attack=0.05, release=0.1, sample_rate=SAMPLE_RATE):
    """Apply attack/release envelope to avoid clicks."""
    n_samples = len(signal)
    attack_samples = int(attack * sample_rate)
    release_samples = int(release * sample_rate)

    envelope = np.ones(n_samples)
    # Attack
    envelope[:attack_samples] = np.linspace(0, 1, attack_samples)
    # Release
    envelope[-release_samples:] = np.linspace(1, 0, release_samples)

    return signal * envelope

def save_wave(filename, signal, sample_rate=SAMPLE_RATE):
    """Save signal as WAV file."""
    # Normalize and convert to 16-bit
    signal = np.clip(signal, -1, 1)
    signal_int = (signal * 32767).astype(np.int16)
    wavfile.write(filename, sample_rate, signal_int)
    print(f"Saved: {filename}")

def main():
    # Get the directory where this script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    audio_dir = os.path.join(script_dir, "audio")
    os.makedirs(audio_dir, exist_ok=True)

    t = np.linspace(0, DURATION, int(SAMPLE_RATE * DURATION), endpoint=False)

    waves = [
        ("sine", generate_sine),
        ("square", generate_square),
        ("sawtooth", generate_sawtooth),
        ("triangle", generate_triangle),
    ]

    for name, generator in waves:
        signal = generator(t, FREQUENCY) * AMPLITUDE
        signal = apply_envelope(signal)
        save_wave(os.path.join(audio_dir, f"{name}.wav"), signal)

    print(f"\nAll audio files generated in {audio_dir}")

if __name__ == "__main__":
    main()
