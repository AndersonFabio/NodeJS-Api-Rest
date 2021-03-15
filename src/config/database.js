const mongoose = require('mongoose');

const url = 'mongodb://blocomariodean01:@mongodb.blocomariodeandrade.com.br/blocomariodean01';

mongoose.connect(url, {useNewUrlParser:true});

module.exports = mongoose;
