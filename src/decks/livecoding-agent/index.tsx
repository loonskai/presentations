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
  const [isWaveformPlaying, setIsWaveformPlaying] = useState(false);
  const [isWaveformMuted, setIsWaveformMuted] = useState(true);
  const [waveformVolume, setWaveformVolume] = useState(0.5);

  const toggleWaveformPlay = () => {
    if (waveformVideoRef.current) {
      if (waveformVideoRef.current.paused) {
        waveformVideoRef.current.play();
        setIsWaveformPlaying(true);
      } else {
        waveformVideoRef.current.pause();
        setIsWaveformPlaying(false);
      }
    }
  };

  const toggleWaveformMute = () => {
    if (waveformVideoRef.current) {
      waveformVideoRef.current.muted = !waveformVideoRef.current.muted;
      setIsWaveformMuted(waveformVideoRef.current.muted);
    }
  };

  const handleWaveformVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setWaveformVolume(vol);
    if (waveformVideoRef.current) {
      waveformVideoRef.current.volume = vol;
    }
  };

  const soundVisVideoRef = useRef<HTMLVideoElement>(null);
  const [isSoundVisPlaying, setIsSoundVisPlaying] = useState(false);

  const toggleSoundVisPlay = () => {
    if (soundVisVideoRef.current) {
      if (soundVisVideoRef.current.paused) {
        soundVisVideoRef.current.play();
        setIsSoundVisPlaying(true);
      } else {
        soundVisVideoRef.current.pause();
        setIsSoundVisPlaying(false);
      }
    }
  };

  const fourierAudioRef = useRef<HTMLAudioElement>(null);
  const [isFourierMuted, setIsFourierMuted] = useState(true);
  const [fourierVolume, setFourierVolume] = useState(0.5);

  const toggleFourierMute = () => {
    if (fourierAudioRef.current) {
      if (isFourierMuted) {
        fourierAudioRef.current.play();
      } else {
        fourierAudioRef.current.pause();
      }
      setIsFourierMuted(!isFourierMuted);
    }
  };

  const handleFourierVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setFourierVolume(vol);
    if (fourierAudioRef.current) {
      fourierAudioRef.current.volume = vol;
    }
  };

  return (
    <div className="reveal-container livecoding-agent-deck">
      <div
        className="reveal tw:bg-[#2d2b29]"
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
                  loop
                  muted
                  playsInline
                  className="tw:rounded-2xl tw:max-h-[600px]"
                />
                <div className="tw:absolute tw:bottom-4 tw:right-4 tw:flex tw:items-center tw:gap-2">
                  <button
                    onClick={toggleWaveformPlay}
                    className="tw:bg-[#3c3836] tw:hover:bg-[#504945] tw:text-[#ebdbb2] tw:px-3 tw:py-2 tw:rounded-lg tw:text-sm tw:font-medium tw:transition-colors tw:border tw:border-[#504945]"
                  >
                    {isWaveformPlaying ? "⏸ Pause" : "▶ Play"}
                  </button>
                  <button
                    onClick={toggleWaveformMute}
                    className="tw:bg-[#3c3836] tw:hover:bg-[#504945] tw:text-[#ebdbb2] tw:px-3 tw:py-2 tw:rounded-lg tw:text-sm tw:font-medium tw:transition-colors tw:border tw:border-[#504945]"
                  >
                    {isWaveformMuted ? "🔇" : "🔊"}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={waveformVolume}
                    onChange={handleWaveformVolume}
                    className="tw:w-20 tw:h-2 tw:bg-[#504945] tw:rounded-lg tw:appearance-none tw:cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="sound-representations">
            <div className="container tw:justify-center">
              <h1>Sound Representations</h1>
              <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center tw:relative">
                <video
                  ref={soundVisVideoRef}
                  src="/manim/SoundVisualization.mp4"
                  loop
                  muted
                  playsInline
                  className="tw:rounded-2xl tw:max-h-[600px]"
                />
                <audio
                  ref={fourierAudioRef}
                  src="/manim/fourier_sample.wav"
                  loop
                />
                <div className="tw:absolute tw:bottom-4 tw:right-4 tw:flex tw:items-center tw:gap-2">
                  <button
                    onClick={toggleSoundVisPlay}
                    className="tw:bg-[#3c3836] tw:hover:bg-[#504945] tw:text-[#ebdbb2] tw:px-3 tw:py-2 tw:rounded-lg tw:text-sm tw:font-medium tw:transition-colors tw:border tw:border-[#504945]"
                  >
                    {isSoundVisPlaying ? "⏸ Pause" : "▶ Play"}
                  </button>
                  <button
                    onClick={toggleFourierMute}
                    className="tw:bg-[#3c3836] tw:hover:bg-[#504945] tw:text-[#ebdbb2] tw:px-3 tw:py-2 tw:rounded-lg tw:text-sm tw:font-medium tw:transition-colors tw:border tw:border-[#504945]"
                  >
                    {isFourierMuted ? "🔇" : "🔊"}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={fourierVolume}
                    onChange={handleFourierVolume}
                    className="tw:w-20 tw:h-2 tw:bg-[#504945] tw:rounded-lg tw:appearance-none tw:cursor-pointer"
                  />
                </div>
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

          <section id="drums">
            <section>
              <div className="container tw:justify-center">
                <h1>Drums</h1>
                <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center">
                  <iframe
                    className="tw:rounded-2xl"
                    width="800"
                    height="450"
                    src="https://www.youtube.com/embed/aLfVj8ZcuLY"
                    title="Drums"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
            <section>
              <div className="container tw:justify-center">
                <h1>Drums</h1>
                <div className="tw:flex-1 tw:flex tw:flex-col tw:justify-center tw:items-center tw:gap-4">
                  <img
                    src={images.drumsFile}
                    alt="Drums File"
                    className="tw:rounded-xl tw:max-h-[250px]"
                  />
                  <div className="tw:flex tw:items-center tw:gap-8">
                    <div className="tw:flex tw:flex-col tw:items-center tw:gap-2">
                      <img
                        src={images.abletonLogo}
                        alt="Ableton"
                        className="tw:h-8"
                      />
                      <img
                        src={images.simpler}
                        alt="Simpler"
                        className="tw:rounded-xl tw:max-h-[100px]"
                      />
                    </div>
                    <div className="tw:w-px tw:h-32 tw:bg-[#504945]" />
                    <div className="tw:flex tw:flex-col tw:items-center tw:gap-2">
                      <img
                        src={images.supercolliderLogo}
                        alt="SuperCollider"
                        className="tw:h-8"
                      />
                      <span className="tw:text-[#ebdbb2] tw:text-xl tw:font-mono">
                        FluidOnsetSlice
                      </span>
                      <img
                        src={images.flucomaLogo}
                        alt="FluCoMa"
                        className="tw:h-6"
                      />
                      <a
                        href="https://www.flucoma.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tw:text-[#83a598] tw:text-sm"
                      >
                        flucoma.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
