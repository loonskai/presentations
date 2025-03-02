import "./styles/PillSpinner.css";

export function PillSpinner() {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="pill"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient id="capsule" x1="0" x2="0" y1="0" y2="1">
            <stop offset="50%" stopColor="#CF4647" />
            <stop offset="50%" stopColor="#f1f1f1" />
          </linearGradient>
        </defs>
        <rect className="shadow" rx="24" />
        <rect className="capsule" rx="24" />
        <rect className="specular" rx="20" />
      </svg>
    </div>
  );
}
