const ClientModel = require('../model/ClientModel');

class ClientController {

    async create(req, res) {
        const client = new ClientModel(req.body);
        await client
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

}

module.exports = new ClientController();