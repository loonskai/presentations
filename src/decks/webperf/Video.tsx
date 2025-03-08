import { useRef } from "react";

export const Video = ({ url }: { url: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <video
        ref={videoRef}
        className="cursor-pointer w-full max-w-3xl screenshot"
        onClick={handleVideoClick}
        controls
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
