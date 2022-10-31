/* eslint-disable import/prefer-default-export */
import { IXmlItem } from '../../interfaces/IXmlItem';

export function handleCalcTotal(items: IXmlItem[]) {
  let value = 0;
  items.forEach((item) => {
    value += item.total;
  });

  return value;
}
