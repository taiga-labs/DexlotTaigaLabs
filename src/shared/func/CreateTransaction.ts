import { beginCell, toNano } from '@ton/core';

type ITransaction = {
  validUntil: number;
  messages: Array<{
    address: string;
    amount: string;
    payload: string;
  }>;
};

export const createBodyCellTransaction = (value: number, many: number): ITransaction => {
  const addresTonWallet = 'EQCq7PZ_Hqlf6msXHyz7S8-OoW4Y1WqpR_1aN1xNUlZ5_xnc';
  const body = beginCell()
    .storeUint(0xfcadf23, 32)
    .storeUint(Math.floor(Date.now() / 1000), 64)
    .storeUint(many, 64)
    .storeUint(toNano(value), 256)
    .endCell();

  const transaction = {
    validUntil: Math.floor(Date.now() / 1000) + 60,
    messages: [
      {
        address: addresTonWallet,
        amount: (toNano(value) * BigInt(many)).toString(), // Коммисия тоном
        payload: body.toBoc().toString('base64'),
      },
    ],
  };
  return transaction;
};
