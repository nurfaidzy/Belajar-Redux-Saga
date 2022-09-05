export const KU_REGIS = "KU_REGIS";

export const DI_TERIMA = "DI_TERIMA";

export const DI_TOLAK = "DI_TOLAK";

export const KuRegis = (data) => {
  return {
    type: KU_REGIS,
    payload: data,
  };
};
