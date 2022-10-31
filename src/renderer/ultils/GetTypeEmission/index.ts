/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable radix */
/* eslint-disable no-console */
export function GetTypeEmission(key?: any) {
  if (key) {
    const getMod = key.substr(9, 11);

    const mod = parseInt(getMod.substr(0, 1));

    console.log(mod);
    return mod;
  }
}
