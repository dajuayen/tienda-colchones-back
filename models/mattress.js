const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MattressSchema = new Schema ({
        name: { type: String, required: true },
        type: { type: String, required: true },
        dimensions: { type: String, required: true },
        firmness: { type: Number, required: true },
        adaptability: { type: Number, required: true },
        reversible: { type: Boolean, required: true },
        desc: { type: String },
});

module.exports = mongoose.model('Mattress', MattressSchema)