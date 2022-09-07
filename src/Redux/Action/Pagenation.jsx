export const SEBELUM = "SEBELUM";
export const LANJUT = "LANJUT";

export const Sebelum = (data) => {
  return {
    type: SEBELUM,
    payload: data,
  };
};

export const Lanjut = (data) => {
  return {
    type: LANJUT,
    payload: data,
  };
};
