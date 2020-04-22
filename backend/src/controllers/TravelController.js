const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const travels = await connection(`travels`).select(`*`);
       
        return response.json(travels);
    },

    async create(request, response){
        //status = "waiting","cancelled", "inProgress","finished";
        const {localization, userName, destination, status } = request.body;
        const travel = await connection('travels').insert({
            localization,
            user_name: userName,
            destination,
            status
        });
    
        return response.json(travel);
    }
};