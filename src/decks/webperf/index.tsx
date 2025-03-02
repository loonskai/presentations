import { useDeckRef } from "../../hooks/useDeckRef";
import { Intro } from "./slides/Intro";

export function WebPerf() {
  const { deckDivRef } = useDeckRef();

  return (
    <div className="reveal-container">
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">
          <Intro />
          <section>Slide 2</section>
          <section>Sources: https://codepen.io/joshbader/pen/gONVYvN</section>
        </div>
      </div>
    </div>
  );
}
