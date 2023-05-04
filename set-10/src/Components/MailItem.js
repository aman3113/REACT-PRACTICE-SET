import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { MailContext } from "./ContextProvider";

const MailItem = ({ item = "" }) => {
  const { subject, content, unread, isStarred, mId } = item;
  const { pathname } = useLocation();

  const { handleDeleteMail, handleToggleRead, handleToggleStar, handleSpam } =
    useContext(MailContext);

  return (
    <div className={`mail ${unread ? "background" : ""}`}>
      <div className="mail-flex">
        <span className="subject">Subject: {subject}</span>
        <span
          style={{
            color: `${isStarred ? "#C6D651" : "black"}`,
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => handleToggleStar(mId)}
        >
          {isStarred ? "Starred" : "Star"}
        </span>
      </div>
      <p className="content">{content}</p>
      <div className="mail-flex">
        {!pathname.includes("guid") && (
          <span>
            <Link to={`/${mId}`}>View Details</Link>
          </span>
        )}

        {pathname === "/" && (
          <div className="mail-flex">
            <button
              style={{ color: "red" }}
              onClick={() => handleDeleteMail(mId)}
            >
              Delete
            </button>
            <button
              style={{ color: `${unread ? "blue" : "orange"}` }}
              onClick={() => handleToggleRead(mId)}
            >
              {unread ? "Mark as Read" : "Mark as Unread"}
            </button>
            <button style={{ color: "green" }} onClick={() => handleSpam(mId)}>
              Report Spam
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MailItem;
