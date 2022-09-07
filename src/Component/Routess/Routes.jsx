import { Routes, Route } from "react-router-dom";
import Logins from "../Login/FormLogin/Logins";
import Register from "../Register/FormRegister/Register";
import Home from "../Home/Home";
import Logout from "../Logout/Logout";
const Routess = () => {
  const base = "Belajar-Redux-Saga";
  return (
    <Routes>
      <Route path={base + "/"} element={<Logins />} />
      <Route path={base + "/Login"} element={<Logins />} />
      <Route path={base + "/Register"} element={<Register />} />
      <Route path={base + "/Home"} element={<Home />} />
      <Route path={base + "/Logout"} element={<Logout />} />
    </Routes>
  );
};
export default Routess;
