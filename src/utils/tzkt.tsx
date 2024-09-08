import { TezosToolkit } from '@taquito/taquito'; // Correct import

// Initialize Tezos toolkit with mainnet RPC URL
const tezos = new TezosToolkit('https://api.tez.ie/rpc/mainnet/');

const tzKTConverter = async (address: string): Promise<void> => {
  try {
    // Fetch balance for the given address
    const balance = await tezos.tz.getBalance(address);
    console.log(`Balance for ${address}: ${balance.toNumber()} µꜩ`);
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
};

// Example call to the tzKTConverter function with a Tezos address
tzKTConverter('tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb');
