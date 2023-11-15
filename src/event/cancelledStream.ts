import { Contract } from 'soroban-client';

import getAdmin from '../utils/soroban/getAdmin';
import getServer from '../utils/soroban/getServer';
import getStream from '../utils/soroban/stream/getStream';
import Stream from '../models/Stream';
import saveNewStream from './saveStream';

const cancelledStream = async (id: string) => {
  try {
    const server = getServer();
    const admin = await server.getAccount(getAdmin().publicKey());
    const contract = new Contract(String(process.env.CONTRACT_ID));
    const stream = await getStream(admin, contract, id);

    const updateStream = await Stream.findOneAndUpdate(
      { _id: id },
      { is_cancelled: stream.is_cancelled },
    );

    if (!updateStream) {
      await saveNewStream(id);
    }

    return updateStream;
  } catch (e) {
    return console.log(e.message);
  }
};

export default cancelledStream;