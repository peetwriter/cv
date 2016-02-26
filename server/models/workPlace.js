import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const workPlaceSchema = new Schema({
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  companyName: {type: 'String', required: false },
  companyUrl: {type: 'String', required: false },
  startDate: { type: 'Date', required: false },
  endDate: { type: 'Date', required: false },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('WorkPlace', workPlaceSchema );
