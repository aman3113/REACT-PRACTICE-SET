import React, { useContext, useEffect, useState } from "react";
import { MailsContext } from "./LandingPage";
import { NavLink } from "react-router-dom";

const Inbox = () => {
  const { apiData } = useContext(MailsContext);
  const [inboxList, setInboxList] = useState([]);
  const [readMails, setReadMails] = useState(0);
  const [unreadMails, setUnreadMails] = useState(0);

  useEffect(() => {
    setInboxList(apiData.emails);
  }, [apiData]);

  useEffect(() => {
    setReadMails(
      inboxList?.reduce((acc, curr) => (curr.read ? (acc = acc + 1) : acc), 0)
    );

    setUnreadMails(
      inboxList?.reduce((acc, curr) => (!curr.read ? (acc = acc + 1) : acc), 0)
    );
  }, [inboxList]);

  return (
    <div>
      <h2 className="text-center text-xl font-bold">Inbox Page</h2>
      <h3>Read Emails:{readMails}</h3>
      <h3>Unread Emails:{unreadMails}</h3>
      {inboxList?.map((mail) => (
        <div key={mail.id}>
          <NavLink
            className={(isActive) =>
              isActive ? "text-purple-500" : "text-blue-300"
            }
            to={`${mail.id}`}
          >
            {mail.subject}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
