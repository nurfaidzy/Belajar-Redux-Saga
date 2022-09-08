import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Pagenation from "../Pagenation/Pagenation";
import { CobaSiData } from "./../../Redux/Action/Home";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.HomeReducer);
  useEffect(() => {
    dispatch(CobaSiData());
  }, [dispatch]);

  const { apalogin } = useSelector((state) => state.LoginReducer);
  const base = "Belajar-Redux-Saga";
  const navigate = useNavigate();
  apalogin === false && navigate("/" + base + "/Login");

  return (
    <div>
      <div className="px-[5%] py-[1%] shadow-md fixed w-full bg-white">
        <Navbar />
      </div>
      <div className="flex justify-center pt-[5%]  ">
        {data ? (
          <div className="grid grid-cols-3 gap-20">
            {data.data.map((x, i) => (
              <div
                key={i}
                className="bg-orange-400 hover:bg-blue-400 p-10 rounded-lg hover:shadow-lg "
              >
                <div className="flex justify-center">
                  <img
                    src={x.avatar}
                    className="rounded-full"
                    alt={x.first_name}
                  />
                </div>
                <div className="flex justify-between p-5 text-2xl font-bold text-white uppercase">
                  <div>{x.first_name} &nbsp;</div>
                  <div>{x.last_name}</div>
                </div>
                <div className="text-center font-bold text-slate-800">
                  Email: <br />
                  {x.email}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>kosong</div>
        )}
      </div>
      <div>
        <Pagenation />
      </div>
    </div>
  );
};

export default Home;
