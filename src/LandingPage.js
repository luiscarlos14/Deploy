import Landing from "pages/Landing";

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";

import "assets/styles/tailwind.css";

function LandingPage() {
  return (
    <BrowserRouter>
      <Landing />;
    </BrowserRouter>
  );
}

export default LandingPage;
