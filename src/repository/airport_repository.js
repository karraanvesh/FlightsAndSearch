const CrudRepository = require('./crud_repository');
const {Airport} = require('../models/index');

class AirportsRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportsRepository;