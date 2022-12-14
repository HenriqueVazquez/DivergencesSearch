/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
import { format } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';
import XMLParser from 'react-xml-parser';

export function HandleFileChange(event: any, setJsonXmlList: any) {
  const itensCopy = Array.from(event.target.files);

  itensCopy.forEach((itemXml: any) => {
    const reader = new FileReader();
    reader.readAsText(itemXml, 'windows-1251');
    reader.onloadend = () => {
      const xmlToJson = new XMLParser().parseFromString(reader.result);

      if (xmlToJson.children[1].children[0].children[2].value) {
        let total = 0;
        let adjustTypePay = 0;
        let typePay = '';

        for (
          let i = 0;
          i < xmlToJson.children[0].children[0].children.length;
          i++
        ) {
          if (xmlToJson.children[0].children[0].children[i].name === 'total') {
            for (
              let j = 0;
              j <
              xmlToJson.children[0].children[0].children[i].children[0].children
                .length;
              j++
            ) {
              if (
                xmlToJson.children[0].children[0].children[i].children[0]
                  .children[j].name === 'vNF'
              ) {
                total = parseFloat(
                  xmlToJson.children[0].children[0].children[i].children[0]
                    .children[j].value
                );
              }
            }
          }
        }

        for (
          let i = 0;
          i < xmlToJson.children[0].children[0].children.length;
          i++
        ) {
          if (xmlToJson.children[0].children[0].children[i].name === 'pag') {
            adjustTypePay = parseInt(
              xmlToJson.children[0].children[0].children[i].children[0]
                .children[0].value,
              10
            );

            switch (adjustTypePay) {
              case 1:
                typePay = 'Dinheiro';
                break;
              case 2:
                typePay = 'Cheque';
                break;
              case 3:
                typePay = 'Cart??o de Cr??dito';
                break;
              case 4:
                typePay = 'Cart??o de D??bito';
                break;
              case 5:
                typePay = 'Cr??dito Loja';
                break;
              case 10:
                typePay = 'Vale Alimenta????o';
                break;
              case 11:
                typePay = 'Vale Refei????o';
                break;
              case 12:
                typePay = 'Vale Presente';
                break;
              case 13:
                typePay = 'Vale Combust??vel';
                break;
              case 17:
                typePay = 'PIX';
                break;
              default:
                typePay = 'OUTROS';
                break;
            }
          }
        }

        const item = {
          nnf: xmlToJson.children[0]?.children[0].children[0].children[5].value,
          chave: xmlToJson.children[1]?.children[0].children[2].value,
          data: format(
            new Date(
              xmlToJson.children[0]?.children[0].children[0].children[6].value
            ),
            'dd/MM/yyyy HH:mm:ss',
            { locale: ptBR }
          ),
          mod: parseInt(
            xmlToJson.children[0]?.children[0].children[0].children[3].value
          ),
          status: 'OK',
          typePay,
          total,
        };

        setJsonXmlList((prev: any) => [item, ...prev]);
      } else if (xmlToJson.children[0].attributes.Id?.match(/\d/g).join('')) {
        const year = xmlToJson.children[0].children[0].children[5].value.substr(
          0,
          4
        );
        const month =
          xmlToJson.children[0].children[0].children[5].value.substr(4, 2);
        const day = xmlToJson.children[0].children[0].children[5].value.substr(
          6,
          2
        );
        const hour = xmlToJson.children[0].children[0].children[6].value.substr(
          0,
          2
        );
        const minutes =
          xmlToJson.children[0].children[0].children[6].value.substr(2, 2);
        const seconds =
          xmlToJson.children[0].children[0].children[6].value.substr(4, 2);

        const dataTratada = `${year}-${month}-${day}T${hour}:${minutes}:${seconds}-03:00`;

        let vCFe = 0;
        let typePay = '';

        if (xmlToJson.children.length) {
          for (let i = 0; i < xmlToJson.children[0].children.length; i++) {
            if (xmlToJson.children[0].children[i]?.name === 'total') {
              for (
                let j = 0;
                j < xmlToJson.children[0].children[i].children.length;
                j++
              ) {
                if (
                  xmlToJson.children[0].children[i].children[j].name === 'vCFe'
                ) {
                  vCFe = parseFloat(
                    xmlToJson.children[0].children[i].children[j].value
                  );
                }
              }
            }
          }

          for (let i = 0; i < xmlToJson.children[0].children.length; i++) {
            if (xmlToJson.children[0].children[i]?.name === 'pgto') {
              for (
                let j = 0;
                j < xmlToJson.children[0].children[i].children.length;
                j++
              ) {
                if (
                  xmlToJson.children[0].children[i].children[j].name === 'MP'
                ) {
                  const adjustTypePay = parseInt(
                    xmlToJson.children[0].children[i].children[j].children[0]
                      .value
                  );

                  switch (adjustTypePay) {
                    case 1:
                      typePay = 'Dinheiro';
                      break;
                    case 2:
                      typePay = 'Cheque';
                      break;
                    case 3:
                      typePay = 'Cart??o de Cr??dito';
                      break;
                    case 4:
                      typePay = 'Cart??o de D??bito';
                      break;
                    case 5:
                      typePay = 'Cr??dito Loja';
                      break;
                    case 10:
                      typePay = 'Vale Alimenta????o';
                      break;
                    case 11:
                      typePay = 'Vale Refei????o';
                      break;
                    case 12:
                      typePay = 'Vale Presente';
                      break;
                    case 13:
                      typePay = 'Vale Combust??vel';
                      break;
                    case 17:
                      typePay = 'PIX';
                      break;
                    default:
                      typePay = 'OUTROS';
                      break;
                  }
                }
              }
            }
          }
        }

        const item = {
          nnf: xmlToJson.children[0].children[0].children[4].value,
          chave: xmlToJson.children[0].attributes.Id.match(/\d/g).join(''),
          data: format(new Date(dataTratada), 'dd/MM/yyyy HH:mm:ss', {
            locale: ptBR,
          }),
          mod: parseInt(xmlToJson.children[0].children[0].children[2].value),
          status: 'OK',
          typePay,
          total: vCFe,
        };

        setJsonXmlList((prev: any) => [item, ...prev]);
      }
    };
  });
}
