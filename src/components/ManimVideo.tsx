import { useEffect, useRef } from "react";

interface ManimVideoProps {
  /** Path to the video file (relative to public folder) */
  src: string;
  /** Path to the playback info JSON file */
  playbackInfo: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ManimVideo component for embedding manim-revealjs animations
 * with interactive click-to-advance controls.
 *
 * Usage:
 * <ManimVideo
 *   src="/manim/Waveforms.mp4"
 *   playbackInfo="/manim/Waveforms.json"
 *   className="tw:rounded-2xl"
 * />
 */
export function ManimVideo({ src, playbackInfo, className = "" }: ManimVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fragmentsRef = useRef<Array<{ start: number; end: number }>>([]);
  const currentFragmentRef = useRef(0);

  useEffect(() => {
    // Load playback info
    fetch(playbackInfo)
      .then((res) => res.json())
      .then((data) => {
        if (data.fragments) {
          fragmentsRef.current = data.fragments;
        }
      })
      .catch((err) => console.error("Failed to load playback info:", err));
  }, [playbackInfo]);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    const fragments = fragmentsRef.current;
    if (fragments.length === 0) {
      // No fragments, just toggle play/pause
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      return;
    }

    const currentFragment = fragmentsRef.current[currentFragmentRef.current];
    if (!currentFragment) {
      // Reset to beginning
      currentFragmentRef.current = 0;
      video.currentTime = 0;
      video.play();
      return;
    }

    // Play current fragment
    video.currentTime = currentFragment.start;
    video.play();

    // Set up listener to pause at fragment end
    const checkTime = () => {
      if (video.currentTime >= currentFragment.end) {
        video.pause();
        video.removeEventListener("timeupdate", checkTime);
        currentFragmentRef.current++;
      }
    };
    video.addEventListener("timeupdate", checkTime);
  };

  return (
    <video
      ref={videoRef}
      src={src}
      className={`fv-video tw:cursor-pointer ${className}`}
      data-fv-playback-info={playbackInfo}
      onClick={handleClick}
      playsInline
    />
  );
}
