import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ValidasiRegister from "../ValidasiRegister/ValidasiRegister";

import { useDispatch, useSelector } from "react-redux";
import { KuRegis } from "../../../Redux/Action/RegisterAction";

const Register = () => {
  const base = "Belajar-Redux-Saga";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidasiRegister) });

  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(KuRegis(data));

  const { woptunggu, maaf } = useSelector((state) => state.RegisterReducer);

  return (
    <div className="flex justify-center py-10 text-center">
      <div>
        <div className="text-4xl font-bold uppercase">Register</div>
        <div className="py-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-2">
              <input
                className="border-2 p-2 border-blue-500 rounded-lg"
                type="text"
                placeholder="Email"
                {...register("email")}
              />
              <br />
              {errors.email && <p className="py-2">{errors.email.message}</p>}
            </div>
            <div className="py-2">
              <input
                className="border-2 p-2 border-blue-500 rounded-lg"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              <br />
              {errors.password && (
                <p className="py-2">{errors.password.message}</p>
              )}
            </div>
            <div className="py-2">
              <button
                className="w-full p-2 rounded-lg font-bold text-white bg-blue-400"
                type="submit"
              >
                {woptunggu === true ? <p> LOADING CUY</p> : <p> Register</p>}
              </button>
              <br />
              {maaf && <p>{maaf.response.data.error}</p>}
              <br />
              Anda punya akun ? &nbsp;
              <a href={"/" + base} className="font-bold text-blue-400">
                MARI
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
