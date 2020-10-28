const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    macaddress: { type: String, required: true },
    nameClient: { type: String, required: true },
    rgClient: { type: String, required: true },
    cpfClient: { type: String, required: true },
    phoneClient: { type: String, required: true },
    streetClient: { type: String, required: true },
    numberClient: { type: String, required: true },
    districtClient: { type: String, required: true },
    cepClient: { type: String, required: false },
    nameResponsible: { type: String, required: false },
    rgResponsible: { type: String, required: false },
    cpfResponsible: { type: String, required: false },
    phoneResponsible: { type: String, required: false },
    observation: { type: String, required: false },
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Client', ClientSchena);