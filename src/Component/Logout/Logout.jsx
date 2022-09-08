import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { KeluarKau } from "../../Redux/Action/LogoutAction";

const Logout = () => {
  const base = "Belajar-Redux-Saga";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { apalogin } = useSelector((state) => state.LoginReducer);
  apalogin === false && navigate("/" + base + "/Login");
  return (
    <div>
      <button
        className="bg-red-400 py-2 px-4 rounded-lg hover:shadow-lg font-bold text-white hover:bg-orange-400"
        onClick={() => dispatch(KeluarKau())}
      >
        Keluar
      </button>
    </div>
  );
};

export default Logout;
