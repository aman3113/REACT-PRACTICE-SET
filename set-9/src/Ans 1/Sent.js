import React, { useContext, useEffect, useState } from "react";
import { MailsContext } from "./LandingPage";

const Sent = () => {
  const { apiData } = useContext(MailsContext);
  const [sentList, setSentList] = useState([]);

  useEffect(() => {
    setSentList(apiData.emails);
  }, [apiData]);

  return (
    <div>
      {sentList?.map((mail) => (
        <div key={mail.id} className="bg-gray-200 my-1">
          <p>Subject: {mail.subject}</p>
          <p>Message: {mail.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Sent;
