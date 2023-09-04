import React, { useState } from "react";
import SideBar from "../layout/SideBar";
import Compose from "../layout/Compose";
import UserInbox from "../layout/UserInbox";
import UserSentBox from "../layout/UserSentBox";
import { useSelector } from "react-redux";
import "./user.css";


function User() {
  const { compose, userinbox, sentmail } = useSelector((state) => state.mails);

  return (
    <div className="userHome">
      <SideBar />
      {compose && <Compose />}
      {userinbox && <UserInbox />}
      {sentmail && <UserSentBox />}
    </div>
  );
}

export default User;
