const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const NovidadesSchema = new Schema({
    macaddress : { type: String, required : true},
    type : { type: Number, required : true},
    title : { type : String, required : true},
    description : { type : String, required : false},
    when : { type : Date, required : true},
    done : { type: Boolean, default : false},
    created : { type: Date, default: Date.now()},
    url : {type: String, required : false}
})

module.exports = mongoose.model('Novidades', NovidadesSchema);