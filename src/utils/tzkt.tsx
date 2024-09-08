import { TezosToolkit } from '@taquito/taquito'; // Correct import

const endpoint = new TezosToolkit('https://api.tez.ie/rpc/mainnet/');

// Correct async function definition
const tzKTConverter = async (address: string): Promise<number> => {
  try {
    const balance = await endpoint.tz.getBalance(address);
    return balance.toNumber(); // Return the balance
  } catch (error) {
    console.error('Error fetching balance:', error);
    return 0; // Or handle the error appropriately
  }
};
