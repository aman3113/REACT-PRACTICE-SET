import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LandingPage from "./Ans 1/LandingPage";
import Inbox from "./Ans 1/Inbox";
import Sent from "./Ans 1/Sent";
import IndividualMail from "./Ans 1/IndividualMail";

const ErrorElement = () => <div> There is some issue</div>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
            errorElement={<ErrorElement />}
          />
          <Route path="/ans1" element={<LandingPage />}>
            <Route path="inbox" element={<Inbox />} />
            <Route path="sent" element={<Sent />} />
            <Route path="mail" element={<IndividualMail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
