/* eslint-disable import/prefer-default-export */
import { IXmlItem } from '../../interfaces/IXmlItem';
import { formatCurrency } from '../../ultils';

export function handleFilterXmlByType(items: IXmlItem[], modelo: number) {
  let totalNfeValue = 0;
  let totalvalueNfceSAT = 0;
  const filterNotes = items.filter(
    (item) => item.mod === 65 || item.mod === 59
  );
  const filterNotesNFE = items.filter((item) => item.mod === 55);

  filterNotes.forEach((item) => {
    totalvalueNfceSAT += item.total;
  });

  filterNotesNFE.forEach((item) => {
    totalNfeValue += item.total;
  });

  return (
    <div className="m-5 flex flex-col items-center justify-center font-black font-sans">
      <div className="mx-2 font-black font-sans">
        {modelo === 55
          ? `Total NFE:  ${formatCurrency(totalNfeValue)} `
          : `Total NFC-e/SAT:  ${formatCurrency(totalvalueNfceSAT)}`}
      </div>
      <div className="mx-2 font-black ">
        Arquivos: {modelo === 55 ? filterNotesNFE.length : filterNotes.length}
      </div>
    </div>
  );
}
