import { Contract, Keypair, SorobanRpc } from '@stellar/stellar-sdk';

import { Network } from '../../types/networkType';

const getConfig = async (network: Network) => {
  const adminKeypair = Keypair.fromSecret(String(process.env.ADMIN_SECRET_KEY));
  const fee = String(process.env.BASE_FEE) || '100000';
  if (network === 'mainnet') {
    const contract = new Contract(String(process.env.MAINNET_CONTRACT_ID));
    const server = new SorobanRpc.Server(String(process.env.MAINNET_FUTURENET_RPC_URL));
    const admin = await server.getAccount(adminKeypair.publicKey());

    return {
      contract,
      server,
      admin,
      adminKeypair,
      fee,
    };
  }

  const server = new SorobanRpc.Server(String(process.env.TESTNET_FUTURENET_RPC_URL));
  const contract = new Contract(String(process.env.TESTNET_CONTRACT_ID));
  const admin = await server.getAccount(adminKeypair.publicKey());

  return {
    contract,
    server,
    admin,
    adminKeypair,
    fee,
  };
};
export default getConfig;
