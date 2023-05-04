import React, { useContext, useEffect, useState } from "react";
import { MailContext } from "./ContextProvider";
import MailItem from "./MailItem";

const InboxPage = () => {
  const { state } = useContext(MailContext);
  const { inboxList } = state;

  const [displayList, setDisplayList] = useState([]);
  const [filter, setFilter] = useState({
    unreadMails: false,
    starredMails: false,
  });

  const unReadMailsLength = displayList?.filter((item) => item.unread).length;

  const handleMailFilter = (e) => {
    setFilter((prev) => ({ ...prev, unreadMails: !prev.unreadMails }));
  };

  const handleStarFilter = (e) => {
    setFilter((prev) => ({ ...prev, starredMails: !prev.starredMails }));
  };

  useEffect(() => {
    setDisplayList(
      inboxList?.filter((item) => {
        if (filter.unreadMails && filter.starredMails) {
          return item.unread && item.isStarred;
        } else if (filter.starredMails) {
          return item.isStarred;
        } else if (filter.unreadMails) {
          return item.unread;
        } else {
          return true;
        }
      })
    );
  }, [inboxList, filter]);

  return (
    <div>
      <fieldset>
        <legend>Filters</legend>
        <div className="filter-div">
          <label>
            <input
              type="checkbox"
              checked={filter.unreadMails}
              value="unreadMails"
              onChange={handleMailFilter}
            />
            Show Unread Mails
          </label>
          <label>
            <input
              type="checkbox"
              checked={filter.starredMails}
              value="starredMails"
              onChange={handleStarFilter}
            />
            Show Starred Mails
          </label>
        </div>
      </fieldset>

      <h2 className="unread-mails">Unread: {unReadMailsLength}</h2>

      <div>
        {displayList?.map((item) => (
          <MailItem key={item.mId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default InboxPage;
