import clsx from "clsx";
import QRCode from "react-qr-code";

export const QR = ({
  className,
  value,
}: {
  className?: string;
  value: string;
}) => {
  return (
    <a
      href={value}
      className={clsx(
        "tw:flex tw:items-center tw:justify-center tw:bg-white tw:rounded-lg tw:w-[110px] tw:h-[110px] tw:p-2 tw:shadow-lg",
        className
      )}
      target="_blank"
      rel="noreferrer"
    >
      <QRCode size={100} value={value} />
    </a>
  );
};
