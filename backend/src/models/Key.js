import mongoose from 'mongoose';

const keySchema = mongoose.Schema({
  key: { type: String, required: true, unique: true },
  validity: { type: Date, required: true },
  usageLimit: { type: Number, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency' },
}, { timestamps: true });

export default mongoose.model('Key', keySchema);
