/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable radix */
export function GetModel(key?: any) {
  if (key) {
    const getMod = key.substr(20, 23);

    const mod = parseInt(getMod.substr(0, 2));

    return mod;
  }
}
