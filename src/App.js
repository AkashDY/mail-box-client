import Header from "./components/layout/Header";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Forget from "./components/pages/Forget";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInbox, getSentMail } from "./components/store/mails";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Route, Routes } from "react-router-dom";
import User from "./components/pages/User";

function App() {
  const mail = useSelector((state) => state.authentication.email);
  console.log(mail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInbox());
  }, [mail]);
  useEffect(() => {
    dispatch(getSentMail());
  }, [mail]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  );
}


export default App;