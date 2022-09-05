import * as yup from "yup";

const ValidasiRegister = yup.object().shape({
  email: yup.string().email("Mohon Berupa Email").required("Wajib Diisi"),
  password: yup.string().min(6, "Minimal 6 Karakter").required("Wajib Diisi"),
});

export default ValidasiRegister;
