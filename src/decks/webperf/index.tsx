import { useDeckRef } from "../../hooks/useDeckRef";
import { Front } from "../slides/Front";
import { Overview } from "../slides/Overview";

export function WebPerf() {
  const { deckDivRef } = useDeckRef();

  return (
    <div className="reveal-container">
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">
          <Front />
          <Overview />
          <section data-auto-animate>
            <div>Sources: https://codepen.io/joshbader/pen/gONVYvN</div>
          </section>
        </div>
      </div>
    </div>
  );
}
