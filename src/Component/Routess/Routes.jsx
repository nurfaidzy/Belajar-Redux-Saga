import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Logins from "../Login/FormLogin/Logins";
const Routess = () => {
  const base = "Belajar-Redux-Saga";
  return (
    <Routes>
      <Route path={base + "/"} element={<Logins />} />
      <Route path={base + "/home"} element={<Home />} />
    </Routes>
  );
};
export default Routess;
