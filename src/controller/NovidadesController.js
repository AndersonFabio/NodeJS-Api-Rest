const NovidadesModel = require('../model/NovidadesModel');

const {startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear} = require('date-fns')

const current = new Date();

class NovidadesController {
    async create(req, res) {
        const task = new NovidadesModel(req.body);
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
        await NovidadesModel.findByIdAndUpdate({'_id':req.params.id}, req.body, {new : true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(response);
        })

    }
     
    async all(req, res) {
        await NovidadesModel.find({macaddress: {'$in' : req.params.macaddress}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async show(req, res) {
        await NovidadesModel.findById(req.params.id)
        .then(response => {
            if(response) 
                return res.status(200).json(response);
            else
                return res.status(404).json({"error":"Novidades não encontrada."});
        })
        .catch(error => {
            return res.status(500).json(error);
        })

    }

    async delete(req, res) {
        await NovidadesModel.deleteOne({"_id":req.params.id})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async done(req, res) {
        await NovidadesModel.findByIdAndUpdate({"_id" : req.params.id},
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
        await NovidadesModel.find({'when' : {'$lt' : new Date()},
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
        await NovidadesModel.find({'macaddress' : {'$in' : req.params.macaddress},
                              'when':{'$gte' : startOfDay(new Date()), '$lte' : endOfDay(new Date())}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async week(req, res) {
        await NovidadesModel.find({'macaddress' : {'$in' : req.params.macaddress},
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
        await NovidadesModel.find({'macaddress' : {'$in' : req.params.macaddress},
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
        await NovidadesModel.find({'macaddress' : {'$in' : req.params.macaddress},
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


module.exports = new NovidadesController();

