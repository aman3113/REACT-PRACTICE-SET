import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MailContext } from "./ContextProvider";
import MailItem from "./MailItem";

const IndividualPage = () => {
  const [item, setItem] = useState({});
  const { mailId } = useParams();
  const { state } = useContext(MailContext);
  console.log(state);
  useEffect(() => {
    setItem(
      state.inboxList?.find((mail) => mail.mId === mailId) ??
        state.trashList?.find((mail) => mail.mId === mailId) ??
        state.spamList?.find((mail) => mail.mId === mailId)
    );
  }, [state, mailId]);

  console.log(item);
  return (
    <div>
      <MailItem item={item} />
    </div>
  );
};

export default IndividualPage;
