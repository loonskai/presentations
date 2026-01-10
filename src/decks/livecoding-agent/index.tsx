import { useRef, useState } from "react";
import { useDeckRef } from "../../hooks/useDeckRef";
import webperfImages from "../webperf/images";
import images from "./images";
import "./styles.css";

export function LivecodingAgent() {
  const { deckDivRef } = useDeckRef({
    transition: "slide",
    controls: false,
    autoAnimateEasing: "ease-out",
    autoAnimateDuration: 1.5,
    autoAnimateUnmatched: true,
    hash: true,
    touch: true,
    slideNumber: true,
  });

  const waveformVideoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (waveformVideoRef.current) {
      waveformVideoRef.current.muted = !waveformVideoRef.current.muted;
      setIsMuted(waveformVideoRef.current.muted);
    }
  };

  return (
    <div className="reveal-container livecoding-agent-deck">
      <div
        className="reveal tw:bg-[#32302f]"
        ref={deckDivRef}
      >
        <div className="slides">
          <section id="intro">
            <div className="container tw:justify-center">
              <div className="tw:flex tw:flex-row tw:items-center tw:gap-4 tw:mb-8">
                <img
                  src={webperfImages.avatarImg}
                  alt="Siarhei Lunski"
                  className="tw:w-16 tw:h-16 tw:rounded-full tw:object-cover tw:shadow-lg"
                />
                <div className="tw:text-left">
                  <p className="tw:text-xl tw:text-[#ebdbb2] tw:m-0!">Siarhei Lunski</p>
                  <p className="tw:text-base tw:text-[#83a598] tw:m-0!">Software Engineer @ Box</p>
                </div>
              </div>
              <div className="tw:flex tw:flex-col tw:items-center">
                <h4 className="tw:text-[#b8bb26]!">AI-Powered Algorithmic</h4>
                <h1 className="tw:text-[#ebdbb2]!">Composition and Sound Design</h1>
              </div>
            </div>
          </section>

          <section id="analog-to-digital">
            <div className="container tw:justify-center">
              <h1>Analog to Digital</h1>
            </div>
          </section>

          <section id="daw">
            <div className="container tw:justify-center">
              <h1>Digital Audio Workstations (DAW)</h1>
            </div>
          </section>

          <section id="dsp">
            <div className="container tw:justify-center">
              <h1>Digital Sound Processing (DSP)</h1>
            </div>
          </section>

          <section id="sound-synthesis">
            <div className="container tw:justify-center">
              <h1>Sound Synthesis</h1>
            </div>
          </section>

          <section id="waveforms">
            <div className="container tw:justify-center">
              <h1>Waveforms</h1>
              <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center tw:relative">
                <video
                  ref={waveformVideoRef}
                  src="/manim/Waveforms.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="tw:rounded-2xl tw:max-h-[600px]"
                />
                <button
                  onClick={toggleMute}
                  className="tw:absolute tw:bottom-4 tw:right-4 tw:bg-[#3c3836] tw:hover:bg-[#504945] tw:text-[#ebdbb2] tw:px-3 tw:py-2 tw:rounded-lg tw:text-sm tw:font-medium tw:transition-colors tw:border tw:border-[#504945]"
                >
                  {isMuted ? "🔇 Unmute" : "🔊 Mute"}
                </button>
              </div>
            </div>
          </section>

          <section id="code-as-synth">
            <div className="container tw:justify-center">
              <h1>Code as Synth</h1>
              <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center">
                <img
                  src={images.codeAsSynth}
                  alt="Code as Synth"
                  className="tw:rounded-2xl tw:max-h-[450px]"
                />
              </div>
            </div>
          </section>

          <section id="supercollider">
            <div className="container tw:justify-center">
              <h1>SuperCollider</h1>
            </div>
          </section>

          <section id="reese-bass">
            <div className="container tw:justify-center">
              <h1>Reese Bass</h1>
              <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center">
                <iframe
                  className="tw:rounded-2xl"
                  width="800"
                  height="450"
                  src="https://www.youtube.com/embed/6m4T0aqJNxo"
                  title="Reese Bass"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
