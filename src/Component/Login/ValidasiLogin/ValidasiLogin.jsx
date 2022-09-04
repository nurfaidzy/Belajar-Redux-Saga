import * as yup from "yup";

const ValidasiLogin = yup.object().shape({
  email: yup
    .string()
    .email("Mohon Pastikan Email Kamu")
    .required("Mohon Diisi"),
  password: yup.string().required("Harus Di isi"),
});

export default ValidasiLogin;
