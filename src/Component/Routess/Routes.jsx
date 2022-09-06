import { Routes, Route } from "react-router-dom";
import Logins from "../Login/FormLogin/Logins";
import Register from "../Register/FormRegister/Register";
import Home from "../Home/Home";
const Routess = () => {
  const base = "Belajar-Redux-Saga";
  return (
    <Routes>
      <Route path={base + "/"} element={<Logins />} />
      <Route path={base + "/Login"} element={<Logins />} />
      <Route path={base + "/Register"} element={<Register />} />
      <Route path={base + "/Home"} element={<Home />} />
    </Routes>
  );
};
export default Routess;
