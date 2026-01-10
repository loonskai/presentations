import { Link } from "react-router-dom";

const decks = [
  {
    path: "/webperf",
    title: "WebPerf",
    description: "The Red Pill of Web Application Performance",
  },
  {
    path: "/livecoding-agent",
    title: "Livecoding Agent",
    description: "Building with AI coding agents",
  },
];

export function Home() {
  return (
    <div className="tw:min-h-screen tw:bg-gradient-to-br tw:from-gray-50 tw:to-gray-100 tw:py-16 tw:px-4">
      <div className="tw:max-w-4xl tw:mx-auto">
        <h1 className="tw:text-5xl tw:font-bold tw:text-gray-900 tw:mb-2 tw:text-center">
          Presentations
        </h1>
        <p className="tw:text-gray-600 tw:text-center tw:mb-12">
          Select a deck to view
        </p>
        <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-6">
          {decks.map((deck) => (
            <Link
              key={deck.path}
              to={deck.path}
              className="tw:group tw:block tw:p-6 tw:bg-white tw:rounded-2xl tw:shadow-sm tw:border tw:border-gray-200 tw:transition-all tw:duration-200 tw:hover:shadow-lg tw:hover:border-blue-300 tw:hover:-translate-y-1"
            >
              <h2 className="tw:text-2xl tw:font-semibold tw:text-gray-900 tw:mb-2 tw:group-hover:text-blue-600 tw:transition-colors">
                {deck.title}
              </h2>
              <p className="tw:text-gray-600">{deck.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
