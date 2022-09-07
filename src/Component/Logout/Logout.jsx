import { useDispatch, useSelector } from "react-redux";
import { KeluarKau } from "../../Redux/Action/LogoutAction";

const Logout = () => {
  const dispatch = useDispatch();
  const { keluar, loading } = useSelector((state) => state.LogoutReducer);
  console.log(keluar);
  console.log(loading);

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
