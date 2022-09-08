import { useDispatch, useSelector } from "react-redux";
import { Lanjut, Sebelum } from "../../Redux/Action/Pagenation";

const Pagenation = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.HomeReducer);
  const sekarang = data.page;
  const tpage = data.tpage;

  return (
    <div className="flex justify-center py-[2%]">
      <div className="flex font-bold text-white">
        {sekarang !== 1 ? (
          <div
            className="p-2 bg-orange-400 rounded-l-lg"
            onClick={() => dispatch(Sebelum(sekarang - 1))}
          >
            <p>{"<<"} </p>
          </div>
        ) : null}
        <div className="p-2  bg-red-400">{data.page && data.page}</div>
        {tpage !== sekarang ? (
          <div
            className="p-2 bg-blue-400 rounded-r-lg"
            onClick={() => dispatch(Lanjut(sekarang + 1))}
          >
            <p>{">>"}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Pagenation;
