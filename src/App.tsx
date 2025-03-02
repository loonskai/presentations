import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { WebPerf } from "./decks/webperf";
import { Home } from "./Home";
import "./App.css";

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Router>
        <Routes>
          <Route path="/webperf" element={<WebPerf />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
