import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./HomePage";
import LandingPage from "./Ans 1/LandingPage";
import Inbox from "./Ans 1/Inbox";
import Sent from "./Ans 1/Sent";
import IndividualMail from "./Ans 1/IndividualMail";
import Favourite from "./Ans 2/Favourite";
import ReadBooks from "./Ans 2/ReadBooks";
import Profile from "./Ans 2/Profile";
import Ans2 from "./Ans 2/Ans2";
import AllBooks from "./Ans 2/AllBooks";
import BooksContextProvider from "./Ans 2/BooksContext";

const ErrorElement = () => <div> There is some issue</div>;

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<HomePage />} errorElement={<ErrorElement />} />,
    <Route path="/ans1" element={<LandingPage />}>
      <Route path="inbox" element={<Inbox />} />
      <Route path="sent" element={<Sent />} />
      <Route path="inbox/:mailId" element={<IndividualMail />} />
    </Route>,
    <Route
      path="/ans2"
      element={
        <BooksContextProvider>
          <Ans2 />
        </BooksContextProvider>
      }
    >
      <Route index={true} element={<AllBooks />} />
      <Route path="favourite" element={<Favourite />} />
      <Route path="read" element={<ReadBooks />} />
      <Route path="Profile" element={<Profile />} />
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
