import { useEffect, useRef } from "react";
import Reveal, { type Options } from "reveal.js";
import "reveal.js/dist/reveal.css";
import RevealNotes from "reveal.js/plugin/notes/notes";

export function useDeckRef(
  options: Options = {
    transition: "slide",
    controls: true,
    autoAnimateEasing: "ease-out",
    autoAnimateDuration: 1.5,
    autoAnimateUnmatched: true,
    plugins: [RevealNotes],
  }
) {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (!deckDivRef.current || deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, options);

    deckRef.current.initialize().catch(console.warn);

    return () => {
      if (deckRef?.current?.isReady()) {
        deckRef.current.destroy();
        deckRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { deckDivRef };
}
