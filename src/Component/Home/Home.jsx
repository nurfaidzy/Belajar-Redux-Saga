import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CobaSiData } from "./../../Redux/Action/Home";

const hasil = (user) => {
  return (
    <div>
      {user.map((item, index) => (
        <div>sdsd</div>
      ))}
    </div>
  );
};

const Home = () => {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.HomeReducer);
  console.log(user);
  useEffect(() => {
    dispatch(CobaSiData());
    setUser(data);
  }, [dispatch]);
  return (
    <div>
      <div>
        {/* {user.data.map((item, index) => (
          <div key={index}>
            <div>{item.email}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Home;
