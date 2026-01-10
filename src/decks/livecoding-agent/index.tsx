import { useDeckRef } from "../../hooks/useDeckRef";
import webperfImages from "../webperf/images";
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
        </div>
      </div>
    </div>
  );
}
