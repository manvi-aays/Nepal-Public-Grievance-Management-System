import { TezosToolkit } from '@taquito/taquito'; // Ensure you have the correct import

// Initialize Tezos toolkit with mainnet RPC URL
const tezos = new TezosToolkit('https://api.tez.ie/rpc/mainnet/');

// Async function to interact with the Tezos blockchain
const tzKTConverter = async (address: string) => {
  try {
    // Fetch balance for the given address
    const balance = await tezos.tz.getBalance(address);
    console.log(`Balance for ${address}: ${balance.toNumber()} µꜩ`);
    return balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
};

// Example call to the tzKTConverter function with a Tezos address
tzKTConverter('tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb');
