import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { WebPerf } from "./decks/webperf";
import { LivecodingAgent } from "./decks/livecoding-agent";
import { Home } from "./Home";

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Router>
        <Routes>
          <Route path="/webperf" element={<WebPerf />} />
          <Route path="/livecoding-agent" element={<LivecodingAgent />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
