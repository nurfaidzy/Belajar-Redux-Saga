export const COBA_LOGIN = "COBA_LOGIN";

export const ANJAY_MASUK = "ANJAY_MASUK";

export const YAH_GAGAL = "YAH_GAGAL";

export const CobaLogin = (data) => {
  return {
    type: COBA_LOGIN,
    payload: data,
  };
};
