import React, { createContext, useReducer } from "react";
import { mails } from "../Data";

export const MailContext = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    inboxList: mails,
    spamList: [],
    trashList: [],
  };

  const mailReducer = (state, action) => {
    switch (action.type) {
      case "DeleteMail":
        return {
          ...state,
          inboxList: state.inboxList.filter(
            (mail) => mail.mId !== action.payload
          ),
          trashList: [
            ...state.trashList,
            state.inboxList.find((mail) => (mail.mId = action.payload)),
          ],
        };

      case "ToggleRead":
        return {
          ...state,
          inboxList: state.inboxList.map((mail) =>
            mail.mId === action.payload
              ? { ...mail, unread: !mail.unread }
              : mail
          ),
        };

      case "ToggleStar":
        return {
          ...state,
          inboxList: state.inboxList.map((mail) =>
            mail.mId === action.payload
              ? { ...mail, isStarred: !mail.isStarred }
              : mail
          ),
        };

      case "ReportSpam":
        return {
          ...state,
          inboxList: state.inboxList.filter(
            (mail) => mail.mId !== action.payload
          ),
          spamList: [
            ...state.spamList,
            state.inboxList.find((mail) => (mail.mId = action.payload)),
          ],
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(mailReducer, initialState);

  const handleDeleteMail = (id) => {
    dispatch({ type: "DeleteMail", payload: id });
  };

  const handleToggleRead = (id) => {
    dispatch({ type: "ToggleRead", payload: id });
  };
  const handleToggleStar = (id) => {
    dispatch({ type: "ToggleStar", payload: id });
  };

  const handleSpam = (id) => {
    dispatch({ type: "ReportSpam", payload: id });
  };

  return (
    <MailContext.Provider
      value={{
        state,
        dispatch,
        handleDeleteMail,
        handleSpam,
        handleToggleRead,
        handleToggleStar,
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export default ContextProvider;
