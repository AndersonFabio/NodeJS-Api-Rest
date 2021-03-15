const InformacoesModel = require('../model/InformacoesModel');

const {startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear} = require('date-fns')

const current = new Date();

class InformacoesController {
    async create(req, res) {
        const task = new InformacoesModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return(res.status(500).json(error))
            });
    }

    async update(req, res) {
        await InformacoesModel.findByIdAndUpdate({'_id':req.params.id}, req.body, {new : true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(response);
        })

    }
     
    async all(req, res) {
        await InformacoesModel.find({macaddress: {'$in' : req.params.macaddress}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async show(req, res) {
        await InformacoesModel.findById(req.params.id)
        .then(response => {
            if(response) 
                return res.status(200).json(response);
            else
                return res.status(404).json({"error":"Evento não encontrado."});
        })
        .catch(error => {
            return res.status(500).json(error);
        })

    }

    async delete(req, res) {
        await InformacoesModel.deleteOne({"_id":req.params.id})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async done(req, res) {
        await InformacoesModel.findByIdAndUpdate({"_id" : req.params.id},
                                          {"done" : req.params.done},
                                          {new : true})
        .then(response => {
            return res.status("200").json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async late(req, res) {
        await InformacoesModel.find({'when' : {'$lt' : new Date()},
                              'macaddress' : {'$in' : req.params.macaddress}
    })
    .sort('when')
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        return res.status(500).json(error);
    })
    }

    async today(req, res) {
        await InformacoesModel.find({'macaddress' : {'$in' : req.params.macaddress},
                              'when':{'$gte' : startOfDay(new Date()), '$lte' : endOfDay(new Date())}})
        .sort('when')
        .then(response => {
            console.log(current);
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async week(req, res) {
        await InformacoesModel.find({'macaddress' : {'$in' : req.params.macaddress},
                              'when':{'$gte' : startOfWeek(new Date()), '$lte' : endOfWeek(new Date())}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async month(req, res) {
        await InformacoesModel.find({'macaddress' : {'$in' : req.params.macaddress},
                              'when':{'$gte' : startOfMonth(new Date()), '$lte' : endOfMonth(new Date())}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async year(req, res) {
        await InformacoesModel.find({'macaddress' : {'$in' : req.params.macaddress},
                              'when':{'$gte' : startOfYear(new Date()), '$lte' : endOfYear(new Date())}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
}


module.exports = new InformacoesController();

