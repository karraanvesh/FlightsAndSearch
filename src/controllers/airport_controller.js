const { AirportService } = require('../services/index');

const airportService = new AirportService();


const create = async (req , res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            err: {} ,
            data: response,
            success: true ,
            message: 'Successfully created the airport'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            err: error ,
            data: {},
            success: false ,
            message: 'Cannot create a new airport'
        });
    }
}

module.exports = {
    create
}