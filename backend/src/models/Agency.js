import mongoose from 'mongoose';

const agencySchema = mongoose.Schema({
  name: { type: String, required: true },
  reseller: { type: mongoose.Schema.Types.ObjectId, ref: 'Reseller', required: true },
  keys: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Key' }],
}, { timestamps: true });

export default mongoose.model('Agency', agencySchema);
