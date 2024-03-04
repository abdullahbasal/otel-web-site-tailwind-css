import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Support from "./pages/Support/Support";
import Error from "./pages/error/Error";
import SearchOtel from "./pages/searc-otel/SearchOtel";
import OtelDetail from "./pages/otel-detail/OtelDetail";
import UsageAgreement from "./pages/usage-agreement/UsageAgreement";
import ConfidentialityAgreement from "./pages/confidentiality-agreement/ConfidentialityAgreement";
import ProtectionOfPersonalData from "./pages/protection-of-personal-data/ProtectionOfPersonalData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/otels" element={<SearchOtel />} />
          <Route path="/otels/:otelName" element={<OtelDetail />} />
          <Route path="/usage-agreement" element={<UsageAgreement />} />
          <Route
            path="/confidentiality-agreement"
            element={<ConfidentialityAgreement />}
          />
          <Route
            path="/protection-of-personal-data"
            element={<ProtectionOfPersonalData />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
