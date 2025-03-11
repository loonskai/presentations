export const Quote = ({
  img,
  quote,
  source,
}: {
  img?: string;
  quote: React.ReactNode;
  source: string;
}) => {
  return (
    <div className="tw:font-montserrat tw:relative tw:flex tw:items-center tw:justify-center tw:min-h-[300px] tw:w-full">
      <div className="tw:relative tw:max-w-2xl tw:mx-auto tw:pt-12 tw:p-8 tw:bg-[var(--gruvbox-light0_hard)] tw:rounded-2xl tw:shadow-2xl">
        <div className="tw:absolute tw:top-4 tw:left-4 tw:flex tw:space-x-2">
          <span className="tw:w-3 tw:h-3 tw:bg-[#cc241d] tw:rounded-full"></span>{" "}
          <span className="tw:w-3 tw:h-3 tw:bg-[#d79921] tw:rounded-full"></span>{" "}
          <span className="tw:w-3 tw:h-3 tw:bg-[#98971a] tw:rounded-full"></span>{" "}
        </div>
        {img && (
          <div className="tw:overflow-hidden tw:rounded-xl tw:mb-4 tw:h-1/3 tw:flex tw:justify-center">
            <img
              src={img}
              alt="Quote image"
              className="tw:h-full tw:w-auto tw:object-contain tw:rounded-lg tw:shadow-md"
            />
          </div>
        )}
        <p className="tw:text-3xl tw:text-[var(--gruvbox-light-fg)]">
          "{quote}"
        </p>
        <p className="tw:text-right tw:mt-1 tw:text-sm tw:text-[#7c6f64] tw:italic">
          — {source}
        </p>
      </div>
    </div>
  );
};
