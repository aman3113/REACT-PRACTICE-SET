import React, { createContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { fakeFetch1 } from "../Data";

export const MailsContext = createContext();

const LandingPage = () => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const getMailData = async () => {
      const resp = await fakeFetch1("https://example.com/api/allemails");
      setApiData(resp.data);
    };
    getMailData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">My Mail Box</h1>
      <div className="text-center">
        <NavLink
          to={"/"}
          className={(isActive) =>
            isActive ? "text-purple-500" : "text-blue-300"
          }
        >
          Back to Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to={"inbox"}
          className={(isActive) =>
            isActive ? "text-purple-500 underline" : "text-blue-300"
          }
        >
          Inbox
        </NavLink>
      </div>

      <NavLink
        to={"sent"}
        className={(isActive) =>
          isActive ? "text-purple-500 underline" : "text-blue-300"
        }
      >
        Sent
      </NavLink>
      <MailsContext.Provider value={{ apiData, setApiData }}>
        <div>
          <Outlet />
        </div>
      </MailsContext.Provider>
    </div>
  );
};

export default LandingPage;
