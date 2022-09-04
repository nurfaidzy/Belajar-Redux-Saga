import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Logins from "../Login/FormLogin/Logins";
const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Logins />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
export default Routess;
