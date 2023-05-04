import React, { useContext } from "react";
import { MailContext } from "./ContextProvider";
import MailItem from "./MailItem";

const SpamPage = () => {
  const { state } = useContext(MailContext);

  return (
    <div>
      <div>
        {state.spamList?.map((item) => (
          <MailItem key={item.mId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SpamPage;
