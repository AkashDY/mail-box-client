import React from "react";
import { useSelector } from "react-redux";
import SentBoxContainer from "./SentBoxContainer";

function UserSentBox() {
  const sentBox = useSelector((state) => state.mails.sent);
  const sentEmails = sentBox.map((item) => {
    return (
      <SentBoxContainer
        key={item.id}
        id={item.id}
        to={item.to}
        subject={item.subject}
        message={item.message}
      />
    );
  });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ alignItems: "center" }}>SentBox</h2>
      {sentEmails}
      {/* {sentBox.map((item) => {
        return (
          <div key={item.id}>
            <div>
              to: <span>{item.to}</span>
            </div>
            <div>
              subject: <span>{item.subject}</span>
            </div>
            <div>
              message: <span>{item.message}</span>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default UserSentBox;
