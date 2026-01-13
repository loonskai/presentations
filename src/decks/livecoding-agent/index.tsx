import { useRef, useState } from "react";
import { useDeckRef } from "../../hooks/useDeckRef";
import webperfImages from "../webperf/images";
import images from "./images";
import "./styles.css";

export function LivecodingAgent() {
  const isMobile =
    typeof window !== "undefined" &&
    /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const showNotes =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("notes");

  const { deckDivRef } = useDeckRef({
    transition: "slide",
    controls: isMobile, // Show navigation arrows on mobile
    autoAnimateEasing: "ease-out",
    autoAnimateDuration: 1.5,
    autoAnimateUnmatched: true,
    hash: true,
    touch: true,
    slideNumber: true,
    showNotes, // Add ?notes to URL to show speaker notes inline
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

  const typeErrorAudioRef = useRef<HTMLAudioElement>(null);
  const [isTypeErrorPlaying, setIsTypeErrorPlaying] = useState(false);
  const [typeErrorVolume, setTypeErrorVolume] = useState(0.5);


  const toggleTypeErrorPlay = () => {
    if (typeErrorAudioRef.current) {
      if (typeErrorAudioRef.current.paused) {
        typeErrorAudioRef.current.play();
        setIsTypeErrorPlaying(true);
      } else {
        typeErrorAudioRef.current.pause();
        setIsTypeErrorPlaying(false);
      }
    }
  };

  const handleTypeErrorVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setTypeErrorVolume(vol);
    if (typeErrorAudioRef.current) {
      typeErrorAudioRef.current.volume = vol;
    }
  };

  return (
    <div className="reveal-container livecoding-agent-deck">
      <div className="reveal tw:bg-[#2d2b29]" ref={deckDivRef}>
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
                  <p className="tw:text-xl tw:text-[#ebdbb2] tw:m-0!">
                    Siarhei Lunski
                  </p>
                  <p className="tw:text-base tw:text-[#83a598] tw:m-0!">
                    Software Engineer @ Box
                  </p>
                </div>
              </div>
              <div className="tw:flex tw:flex-col tw:items-center">
                <h4 className="tw:text-[#b8bb26]!">AI-Powered Algorithmic</h4>
                <h1 className="tw:text-[#ebdbb2]!">
                  Composition and Sound Design
                </h1>
              </div>
            </div>
            <aside className="notes">Notes: Intro</aside>
          </section>

          <section id="daw">
            <div className="container tw:justify-center">
              <h1>Digital Audio Workstations (DAW)</h1>
              <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center">
                <img
                  src={images.daws}
                  alt="Digital Audio Workstations"
                  className="tw:rounded-2xl tw:max-h-[450px]"
                />
              </div>
            </div>
            <aside className="notes">Notes: DAW</aside>
          </section>

          <section id="sampling">
            <div className="container tw:justify-center">
              <h1>Sampling</h1>
              <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center">
                <iframe
                  className="tw:rounded-2xl"
                  width="800"
                  height="450"
                  src="https://www.youtube.com/embed/1ZeciX-3wfs?start=38"
                  title="Sampling"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <aside className="notes">Notes: Sampling</aside>
          </section>

          <section id="sound-synthesis">
            <div className="container tw:justify-center">
              <h1>Sound Synthesis</h1>
              <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center">
                <iframe
                  className="tw:rounded-2xl"
                  width="800"
                  height="450"
                  src="https://www.youtube.com/embed/ZopDeuSMqxA"
                  title="Sound Synthesis"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <aside className="notes">Notes: Sound Synthesis</aside>
          </section>

          <section id="sound-representations">
            <div className="container tw:justify-center">
              <h1>Additive Synthesis</h1>
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
            <aside className="notes">Notes: Sound Representations</aside>
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
            <aside className="notes">Notes: Waveforms</aside>
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
            <aside className="notes">Notes: Reese Bass</aside>
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
            <aside className="notes">Notes: Code as Synth</aside>
          </section>

          <section id="supercollider">
            <div className="container tw:justify-center">
              <h1>SuperCollider</h1>
              <img
                src={images.supercolliderLogo}
                alt="SuperCollider"
                className="tw:h-16"
              />
              <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center">
                <img
                  src={images.supercolliderIde}
                  alt="SuperCollider IDE"
                  className="tw:rounded-2xl tw:max-h-[450px]"
                />
              </div>
            </div>
            <aside className="notes">Notes: SuperCollider</aside>
          </section>

          <section id="demo">
            <div className="container tw:justify-center tw:items-center">
              <h1 className="tw:text-[8rem]! tw:font-bold">DEMO</h1>
            </div>
            <aside className="notes">Notes: Demo 1</aside>
          </section>

          <section id="phase-cancellation">
            <div className="container tw:justify-center">
              <h1>Phase Cancellation</h1>
              <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center">
                <video
                  src="/manim/PhaseCancellation.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="tw:rounded-2xl tw:max-h-[600px]"
                />
              </div>
            </div>
            <aside className="notes">Notes: Phase Cancellation</aside>
          </section>

          <section id="filter">
            <div className="container tw:justify-center">
              <h1>Filters</h1>
              <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center">
                <video
                  src="/manim/Filters.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="tw:rounded-2xl tw:max-h-[600px]"
                />
              </div>
            </div>
            <aside className="notes">Notes: Filter</aside>
          </section>

          <section id="livecoding-environment">
            <div className="container tw:justify-center">
              <h1>Livecoding Environment</h1>
              <div className="tw:flex-1 tw:flex tw:flex-col tw:justify-center tw:items-center tw:gap-6">
                <div className="tw:flex tw:items-center tw:gap-8">
                  <div className="tw:flex tw:flex-col tw:items-center tw:gap-2">
                    <img
                      src={images.supercolliderLogo}
                      alt="SuperCollider"
                      className="tw:h-20"
                    />
                    <span className="tw:text-[#ebdbb2] tw:text-xl">
                      SuperCollider
                    </span>
                  </div>
                  <span className="tw:text-[#ebdbb2] tw:text-4xl tw:font-bold">
                    +
                  </span>
                  <div className="tw:flex tw:flex-col tw:items-center tw:gap-2">
                    <img
                      src={images.strudelLogo}
                      alt="Strudel"
                      className="tw:h-20"
                    />
                    <span className="tw:text-[#ebdbb2] tw:text-xl">
                      Strudel.js
                    </span>
                  </div>
                  <span className="tw:text-[#ebdbb2] tw:text-xl">
                    + many more...
                  </span>
                  <span className="tw:text-[#ebdbb2] tw:text-4xl tw:font-bold">
                    =
                  </span>
                  <div className="tw:flex tw:flex-col tw:items-center tw:gap-2">
                    <img src={images.flokLogo} alt="Flok" className="tw:h-20" />
                    <span className="tw:text-[#ebdbb2] tw:text-xl">
                      Flok.cc
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <aside className="notes">Notes: Livecoding Environment</aside>
          </section>

          <section id="setup">
            <div className="container tw:justify-center tw:items-center tw:p-8">
              <video
                src="/manim/SetupArchitecture.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="tw:rounded-2xl tw:max-h-[75vh] tw:max-w-[85vw]"
              />
            </div>
            <aside className="notes">Notes: Setup</aside>
          </section>

          <section id="percussions">
            <section>
              <div className="container tw:justify-center">
                <h1>Percussions</h1>
                <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center">
                  <iframe
                    className="tw:rounded-2xl"
                    width="800"
                    height="450"
                    src="https://www.youtube.com/embed/aLfVj8ZcuLY"
                    title="Percussions"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <aside className="notes">Notes: Percussions Video</aside>
            </section>
            <section>
              <div className="container tw:justify-center">
                <h1>Percussions</h1>
                <div className="tw:flex-1 tw:flex tw:flex-col tw:justify-center tw:items-center tw:gap-4">
                  <img
                    src={images.drumsFile}
                    alt="Percussions File"
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
              <aside className="notes">Notes: Percussions Tools</aside>
            </section>
          </section>

          <section id="demo-2">
            <section>
              <div className="container tw:justify-center tw:items-center">
                <h1 className="tw:text-[8rem]! tw:font-bold">DEMO</h1>
              </div>
              <aside className="notes">Notes: Demo 2</aside>
            </section>
            <section>
              <div className="container tw:justify-center tw:items-center">
                <iframe
                  className="tw:rounded-2xl"
                  width="800"
                  height="450"
                  src="https://www.youtube.com/embed/QPv3fdZ_cU0"
                  title="Demo 2 Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <aside className="notes">Notes: Demo 2 Video</aside>
            </section>
          </section>

          <section id="livecoding-environment-claude">
            <div className="container tw:justify-center">
              <h1>Livecoding Environment</h1>
              <div className="tw:flex-1 tw:flex tw:flex-col tw:justify-center tw:items-center tw:gap-6">
                <div className="tw:flex tw:items-center tw:gap-8">
                  <div className="tw:flex tw:flex-col tw:items-center tw:gap-2">
                    <img
                      src={images.supercolliderLogo}
                      alt="SuperCollider"
                      className="tw:h-20"
                    />
                    <span className="tw:text-[#ebdbb2] tw:text-xl">
                      SuperCollider
                    </span>
                  </div>
                  <span className="tw:text-[#ebdbb2] tw:text-4xl tw:font-bold">
                    +
                  </span>
                  <div className="tw:flex tw:flex-col tw:items-center tw:gap-2">
                    <img
                      src={images.strudelLogo}
                      alt="Strudel"
                      className="tw:h-20"
                    />
                    <span className="tw:text-[#ebdbb2] tw:text-xl">
                      Strudel.js
                    </span>
                  </div>
                  <span className="tw:text-[#ebdbb2] tw:text-4xl tw:font-bold">
                    +
                  </span>
                  <img
                    src={images.claudeLogo}
                    alt="Claude"
                    className="tw:h-[3.75rem]"
                  />
                  <span className="tw:text-[#ebdbb2] tw:text-4xl tw:font-bold">
                    =
                  </span>
                  <div className="tw:flex tw:flex-col tw:items-center tw:gap-2">
                    <img src={images.flokLogo} alt="Flok" className="tw:h-20" />
                    <span className="tw:text-[#ebdbb2] tw:text-xl">
                      Flok.cc
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <aside className="notes">
              Notes: Livecoding Environment + Claude
            </aside>
          </section>

          <section id="agent-architecture">
            <div className="container tw:justify-center tw:items-center tw:p-8">
              <video
                src="/manim/AgentArchitecture.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="tw:rounded-2xl tw:max-h-[75vh] tw:max-w-[85vw]"
              />
            </div>
            <aside className="notes">Notes: Agent Architecture</aside>
          </section>

          <section id="thank-you">
            <div className="container tw:justify-center tw:items-center">
              <h1>Thank you</h1>
              <div className="tw:flex tw:flex-col tw:items-center tw:gap-4">
                <img
                  src={images.qrCode}
                  alt="QR Code"
                  className="tw:rounded-xl tw:border-4 tw:border-[#b8bb26] tw:p-4"
                />
                <a
                  href="https://github.com/loonskai/livecoding-agent-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw:text-[#ebdbb2] tw:text-xl tw:hover:text-[#b8bb26]"
                >
                  Github (Demo + Links)
                </a>
              </div>
            </div>
            <aside className="notes">Notes: Thank you</aside>
          </section>

          <section id="bonus">
            <div className="container tw:justify-center tw:items-center">
              <div className="tw:flex-1 tw:flex tw:justify-center tw:items-center tw:relative">
                <img
                  src={images.typeerror}
                  alt="TypeError"
                  className="tw:rounded-2xl tw:max-h-[600px]"
                />
                <audio
                  ref={typeErrorAudioRef}
                  src="/manim/TypeError.wav"
                  loop
                />
                <div className="tw:absolute tw:bottom-4 tw:right-4 tw:flex tw:items-center tw:gap-2">
                  <button
                    onClick={toggleTypeErrorPlay}
                    className="tw:bg-[#3c3836] tw:hover:bg-[#504945] tw:text-[#ebdbb2] tw:px-3 tw:py-2 tw:rounded-lg tw:text-sm tw:font-medium tw:transition-colors tw:border tw:border-[#504945]"
                  >
                    {isTypeErrorPlaying ? "⏸ Pause" : "▶ Play"}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={typeErrorVolume}
                    onChange={handleTypeErrorVolume}
                    className="tw:w-20 tw:h-2 tw:bg-[#504945] tw:rounded-lg tw:appearance-none tw:cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <aside className="notes">Notes: Bonus</aside>
          </section>

          <section id="end" data-visibility="hidden"></section>
        </div>
      </div>
    </div>
  );
}
