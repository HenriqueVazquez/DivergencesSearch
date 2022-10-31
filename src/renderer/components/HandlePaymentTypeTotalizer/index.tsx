/* eslint-disable import/prefer-default-export */
import { IXmlItem } from '../../interfaces/IXmlItem';
import { formatCurrency } from '../../ultils';

export function handlePaymentTypeTotalizer(items: IXmlItem[]) {
  let totalCash = 0;
  let totalCheck = 0;
  let totalCreditCard = 0;
  let totalDebitCard = 0;
  let totalCreditStore = 0;
  let totalFoodStamps = 0;
  let totalMealTicket = 0;
  let totalGiftCard = 0;
  let totalFuelVoucher = 0;
  let totalPIX = 0;
  let totalOuthers = 0;

  items.forEach((item) => {
    switch (item.typePay) {
      case 'Dinheiro':
        totalCash += item.total;
        break;
      case 'Cheque':
        totalCheck += item.total;
        break;
      case 'Cartão de Crédito':
        totalCreditCard += item.total;
        break;
      case 'Cartão de Débito':
        totalDebitCard += item.total;
        break;
      case 'Crédito Loja':
        totalCreditStore += item.total;
        break;
      case 'Vale Alimentação':
        totalFoodStamps += item.total;
        break;
      case 'Vale Refeição':
        totalMealTicket += item.total;
        break;
      case 'Vale Presente':
        totalGiftCard += item.total;
        break;
      case 'Vale Combustível':
        totalFuelVoucher += item.total;
        break;
      case 'PIX':
        totalPIX += item.total;
        break;
      default:
        totalOuthers += item.total;
        break;
    }
  });

  return (
    <div className="flex flex-col items-center justify-center font-black font-sans mt-6 w-full">
      <div className="flex font-black font-sans  w-full items-center justify-evenly gap-10 ">
        {totalCash ? (
          <div>{`Dinheiro:  ${formatCurrency(totalCash)} `}</div>
        ) : null}

        {totalCheck ? (
          <div>{`Cheque:  ${formatCurrency(totalCheck)} `}</div>
        ) : null}

        {totalCreditCard ? (
          <div>{`Cartão de Crédito:  ${formatCurrency(totalCreditCard)} `}</div>
        ) : null}

        {totalDebitCard ? (
          <div>{`Cartão de Débito:  ${formatCurrency(totalDebitCard)} `}</div>
        ) : null}

        {totalCreditStore ? (
          <div>{`Crédito Loja:  ${formatCurrency(totalCreditStore)} `}</div>
        ) : null}

        {totalFoodStamps ? (
          <div>{`Vale Alimentação:  ${formatCurrency(totalFoodStamps)}`}</div>
        ) : null}

        {totalMealTicket ? (
          <div>{`Vale Refeição:  ${formatCurrency(totalMealTicket)} `}</div>
        ) : null}

        {totalGiftCard ? (
          <div>{`Vale Presente:  ${formatCurrency(totalGiftCard)} `}</div>
        ) : null}

        {totalFuelVoucher ? (
          <div>{`Vale Combustível:  ${formatCurrency(totalFuelVoucher)} `}</div>
        ) : null}

        {totalPIX ? <div>{`PIX:  ${formatCurrency(totalPIX)} `}</div> : null}

        {totalOuthers ? (
          <div>{`Outros:  ${formatCurrency(totalOuthers)} `}</div>
        ) : null}
      </div>
    </div>
  );
}
