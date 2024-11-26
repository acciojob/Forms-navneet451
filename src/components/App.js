import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/form" id="form-link">Section 1</Link>
          </li>
          <li>
            <Link to="/form-ref" id="form-ref-link">Section 2</Link>
          </li>
          <li>
            <Link to="/form-state" id="form-state-link">Section 3</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </Router>
  );
}

export default App;


