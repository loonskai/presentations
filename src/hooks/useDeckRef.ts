import { useEffect, useRef } from "react";
import Reveal, { type Options } from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes";

export function useDeckRef(
  options: Options = {
    transition: "slide",
    autoAnimateEasing: "ease-out",
    autoAnimateDuration: 1.5,
    autoAnimateUnmatched: true,
    hash: true,
  }
) {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (!deckDivRef.current || deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      ...options,
      plugins: [RevealNotes],
    });

    deckRef.current
      .initialize()
      .then(() => {
        deckRef.current?.on("slidechanged", (event: unknown) => {
          const e = event as { previousSlide?: HTMLElement; currentSlide: HTMLElement };
          e.previousSlide
            ?.querySelectorAll<HTMLVideoElement>("video[autoplay]")
            .forEach((v: HTMLVideoElement) => v.pause());
          e.currentSlide
            .querySelectorAll<HTMLVideoElement>("video[autoplay]")
            .forEach((v: HTMLVideoElement) => v.play().catch(() => {}));
        });
      })
      .catch(console.warn);

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
