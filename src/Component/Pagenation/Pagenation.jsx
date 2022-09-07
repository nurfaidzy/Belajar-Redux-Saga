import { useDispatch } from "react-redux";
import { Lanjut, Sebelum } from "../../Redux/Action/Pagenation";

const Pagenation = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center py-[2%]">
      <div className="flex font-bold text-white">
        <div
          className="p-2 bg-orange-400 rounded-l-lg"
          onClick={() => dispatch(Sebelum(1))}
        >
          <p>{"<<"} </p>
        </div>
        <div className="p-2  bg-red-400">no sekarang</div>
        <div
          className="p-2 bg-blue-400 rounded-r-lg"
          onClick={() => dispatch(Lanjut(2))}
        >
          <p>{">>"}</p>
        </div>
      </div>
    </div>
  );
};

export default Pagenation;
