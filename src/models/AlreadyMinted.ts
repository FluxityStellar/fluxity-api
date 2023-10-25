import mongoose from 'mongoose';

export interface AlreadyMintedType {
  address: string;
}

const AlreadyMinted = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
});

export default mongoose.model('AlreadyMinted', AlreadyMinted);