import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ValidasiLogin from "../ValidasiLogin/ValidasiLogin";

import { useDispatch, useSelector } from "react-redux";
import { CobaLogin } from "../../../Redux/Action/LoginAction";

const Logins = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidasiLogin) });

  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(CobaLogin(data));

  const { gagalcuy, tunggucoy } = useSelector((state) => state.LoginReducer);

  return (
    <div className="flex justify-center py-10">
      <div>
        <div className="flex justify-center uppercase text-4xl font-bold">
          LOGIN
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="pt-5">
          <div className="py-2">
            <input
              type="text"
              placeholder="Masukkan Email"
              className="border-2 p-2 border-orange-400 "
              {...register("email")}
            />
            <br />
            {errors.email && <p className="py-2">{errors.email.message}</p>}
          </div>
          <div className="py-2">
            <input
              type="password"
              placeholder="Masukkan Password"
              className="border-2 p-2 border-orange-400 "
              {...register("password")}
            />
            <br />
            {errors.password && (
              <p className="py-2">{errors.password.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-400 p-2 font-bold text-white"
            >
              {tunggucoy === true ? <p> LOADING CUY</p> : <p> MASUK</p>}
            </button>
          </div>
        </form>
        <div className="text-center">
          {gagalcuy && <p>{gagalcuy.response.data.error}</p>}
        </div>
        <div className="text-center p-2">
          Belum punya akun?
          <a href="/home" className="font-bold text-orange-400">
            MARI
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logins;
