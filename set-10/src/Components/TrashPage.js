import React, { useContext } from "react";
import { MailContext } from "./ContextProvider";
import MailItem from "./MailItem";

const TrashPage = () => {
  const { state } = useContext(MailContext);

  return (
    <div>
      {state.trashList?.map((item) => (
        <MailItem key={item.mId} item={item} />
      ))}
    </div>
  );
};

export default TrashPage;
