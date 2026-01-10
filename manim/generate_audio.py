import numpy as np
from scipy.io import wavfile

# Sample rate
sample_rate = 44100
duration = 5  # seconds

# Frequency components from the animation
# Map visual frequencies (0.5-7.2) to audio frequencies (100Hz - 2000Hz)
# Using logarithmic mapping for more musical result
components = [
    (0.5, 0.7),   # Low bass
    (1.0, 1.0),   # Bass
    (1.6, 0.5),   # Low-mid
    (2.2, 1.3),   # Mid (loudest)
    (2.8, 0.9),   # Mid
    (3.5, 0.7),   # Mid-high
    (4.2, 0.5),   # High
    (5.0, 0.4),   # Higher
    (5.8, 0.35),  # Higher
    (6.5, 0.3),   # Highest
    (7.2, 0.25),  # Highest
]

# Map to real audio frequencies (logarithmic scale from 80Hz to 3000Hz)
min_visual = 0.5
max_visual = 7.2
min_audio = 80    # Hz
max_audio = 3000  # Hz

def map_frequency(visual_freq):
    # Logarithmic mapping
    ratio = (visual_freq - min_visual) / (max_visual - min_visual)
    return min_audio * (max_audio / min_audio) ** ratio

# Generate time array
t = np.linspace(0, duration, int(sample_rate * duration), endpoint=False)

# Generate audio by summing sine waves
audio = np.zeros_like(t)

print("Generating audio with frequencies:")
for visual_freq, amplitude in components:
    audio_freq = map_frequency(visual_freq)
    print(f"  {visual_freq:.1f} -> {audio_freq:.1f} Hz (amplitude: {amplitude})")
    audio += amplitude * np.sin(2 * np.pi * audio_freq * t)

# Normalize to prevent clipping
audio = audio / np.max(np.abs(audio)) * 0.8

# Apply fade in/out to avoid clicks
fade_duration = 0.1  # seconds
fade_samples = int(fade_duration * sample_rate)
fade_in = np.linspace(0, 1, fade_samples)
fade_out = np.linspace(1, 0, fade_samples)
audio[:fade_samples] *= fade_in
audio[-fade_samples:] *= fade_out

# Convert to 16-bit PCM
audio_16bit = (audio * 32767).astype(np.int16)

# Save to file
output_path = "/Users/loonskai/Code/presentations/manim/fourier_sample.wav"
wavfile.write(output_path, sample_rate, audio_16bit)
print(f"\nSaved to: {output_path}")
