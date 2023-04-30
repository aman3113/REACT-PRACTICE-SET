import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MailsContext } from "./LandingPage";

const IndividualMail = () => {
  const { mailId } = useParams();
  const { apiData } = useContext(MailsContext);
  const { emails } = apiData;

  const [mail, setMail] = useState({});

  // console.log(apiData);

  useEffect(() => {
    setMail(emails?.find((item) => item.id === Number(mailId)));
  }, [apiData]);

  return (
    <div className="bg-gray-200 p-1">
      <h1>{mail?.subject}</h1>
      <p>From: {mail?.sender}</p>
      <p>Message: {mail?.message}</p>
    </div>
  );
};

export default IndividualMail;
