export const Quote = ({
  img,
  quote,
  source,
}: {
  img?: string;
  quote: string;
  source: string;
}) => {
  return (
    <div className="font-montserrat relative flex items-center justify-center min-h-[300px] w-full">
      {/* Quote Card */}
      <div className="relative max-w-2xl mx-auto pt-12 p-8 bg-[var(--gruvbox-dark-bg)] rounded-2xl shadow-2xl">
        {/* Mac-style window controls */}
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="w-3 h-3 bg-[#cc241d] rounded-full"></span>{" "}
          {/* Red */}
          <span className="w-3 h-3 bg-[#d79921] rounded-full"></span>{" "}
          {/* Yellow */}
          <span className="w-3 h-3 bg-[#98971a] rounded-full"></span>{" "}
          {/* Green */}
        </div>

        {/* Image inside card */}
        {img && (
          <div className="overflow-hidden rounded-xl mb-4 h-1/3">
            <img
              src={img}
              alt="Quote image"
              className="h-full w-auto object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Quote Content */}
        <p className="leading-snug text-3xl text-[var(--gruvbox-dark-fg)]">
          “{quote}”
        </p>

        {/* Attribution */}
        <p className="text-right mt-4 text-sm text-[#7c6f64] italic">
          — {source}
        </p>
      </div>
    </div>
  );
};
