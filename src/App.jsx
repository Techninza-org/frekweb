
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TermCon from "./pages/TermCon";
import Refundpolicy from "./pages/Refundpolicy";
import Privacy from "./pages/Privacy";
import TermAndServices from "./pages/TermAndServices";
import ChildPolicySefty from "./pages/ChildPolicySefty";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/term" element={<TermCon />} />
        <Route path="/refundpolicy" element={<Refundpolicy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/termandservices" element={<TermAndServices />} />
        <Route path="/childpolicy" element={< ChildPolicySefty/>} />
      </Routes>
    </Router>
  );
}

export default App;
