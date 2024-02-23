import { xdr } from 'stellar-sdk';

import { Rate } from '../../../../models/Stream';
import { Networks } from '../../../../constant/network';
import ToScVal from '../../scVal';
import getConfig from '../../getConfig';

const { scvMap } = xdr.ScVal;
const { ScMapEntry: addToMap } = xdr;

const toXdrValue = async (address: string, token: string) => {
  const { adminSecretKey } = await getConfig(Networks.Testnet);

  const startDate = Math.floor(Date.now() / 1000).toString();
  const endDate = String(Number(startDate) + Rate.Weekly);
  const cliffDate = startDate;
  const cancellableDate = endDate;
  const sender = adminSecretKey.publicKey();
  const amount = BigInt(Number(process.env.CLAIM_STREAM_AMOUNT) * 10 ** 7);

  return scvMap([
    new addToMap({
      key: ToScVal.symbol('amount'),
      val: ToScVal.i128(amount),
    }),
    new addToMap({
      key: ToScVal.symbol('cancellable_date'),
      val: ToScVal.u64(cancellableDate),
    }),
    new addToMap({
      key: ToScVal.symbol('cliff_date'),
      val: ToScVal.u64(cliffDate),
    }),
    new addToMap({
      key: ToScVal.symbol('end_date'),
      val: ToScVal.u64(endDate),
    }),
    new addToMap({
      key: ToScVal.symbol('rate'),
      val: ToScVal.u32(Rate.Weekly),
    }),
    new addToMap({
      key: ToScVal.symbol('receiver'),
      val: ToScVal.address(address),
    }),
    new addToMap({
      key: ToScVal.symbol('sender'),
      val: ToScVal.address(sender),
    }),
    new addToMap({
      key: ToScVal.symbol('start_date'),
      val: ToScVal.u64(startDate),
    }),
    new addToMap({
      key: ToScVal.symbol('token'),
      val: ToScVal.address(token),
    }),
  ]);
};

export default toXdrValue;
