import { useDeckRef } from "../hooks/useDeckRef";

export function WebPerf() {
  const { deckDivRef } = useDeckRef();

  return (
    <div className="reveal-container">
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">
          <section>Slide 1</section>
          <section>Slide 2</section>
        </div>
      </div>
    </div>
  );
}
