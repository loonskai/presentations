import { useDeckRef } from "../../hooks/useDeckRef";
import BlurEffect from "./BlurEffect";

export function WebPerf() {
  const { deckDivRef } = useDeckRef();

  return (
    <div className="reveal-container">
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">
          <section data-auto-animate>
            <div className="flex flex-col items-center text-center p-6 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <BlurEffect
                  src="src/assets/images/warsawjs-logo.png"
                  alt="WarsawJS Logo"
                  className="w-46 h-auto mx-auto my-4"
                />
                <h2 className="font-montserrat font-semibold text-5xl">
                  The Red Pill
                </h2>
                <h3 className="font-montserrat text-2xl">of the</h3>
                <h1 className="font-montserrat font-black text-4xl">
                  Web Application
                </h1>
                <h3 className="font-montserrat text-2xl">performance</h3>
              </div>
              <div className="flex flex-col items-center mt-8 text-center">
                <BlurEffect
                  src="src/assets/images/avatar.jpg"
                  alt="Siarhei Lunski"
                  className="w-20 h-20 rounded-full object-cover shadow-lg mb-4"
                />
                <h2 className="font-montserrat font-semibold text-2xl">
                  Siarhei Lunski
                </h2>
                <p className="font-montserrat text-lg text-gray-700">
                  Software Engineer @ Box
                </p>
              </div>
            </div>
          </section>
          <section data-auto-animate>
            <div>Slide 2</div>
          </section>
          <section data-auto-animate>
            <div>Sources: https://codepen.io/joshbader/pen/gONVYvN</div>
          </section>
        </div>
      </div>
    </div>
  );
}
