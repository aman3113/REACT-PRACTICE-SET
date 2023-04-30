import React from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./HomePage";
import LandingPage from "./Ans 1/LandingPage";
import Inbox from "./Ans 1/Inbox";
import Sent from "./Ans 1/Sent";
import IndividualMail from "./Ans 1/IndividualMail";

const ErrorElement = () => <div> There is some issue</div>;

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<HomePage />} errorElement={<ErrorElement />} />,
    <Route path="/ans1" element={<LandingPage />}>
      <Route path="inbox" element={<Inbox />} />
      <Route path="sent" element={<Sent />} />
      <Route path="inbox/:mailId" element={<IndividualMail />} />
    </Route>,
  ])
);

const App = () => {
  return (
    <div className=" p-3 border border-red-950">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
