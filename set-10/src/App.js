import React from "react";
import "./app.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InboxPage from "./Components/InboxPage";
import SpamPage from "./Components/SpamPage";
import TrashPage from "./Components/TrashPage";
import ContextProvider from "./Components/ContextProvider";
import IndividualPage from "./Components/IndividualPage";

const App = () => {
  return (
    <div className="">
      <h1 className="heading">Aman's Mail Box</h1>
      <div className="container">
        <BrowserRouter>
          <Sidebar />
          <div className="route-container">
            <ContextProvider>
              <Routes>
                <Route path="/" element={<InboxPage />} />
                <Route path="/spam" element={<SpamPage />} />
                <Route path="/trash" element={<TrashPage />} />
                <Route path="/:mailId" element={<IndividualPage />} />
              </Routes>
            </ContextProvider>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
