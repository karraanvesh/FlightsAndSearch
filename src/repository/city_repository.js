const {City} = require('../models/index');

class CityRepository{
    // object destructuring so that we can access
    // all values of keys just by using this 
    // ex : object is {name : "ram"} we can access using 'name'
    // by object destructurig 
    async createCity({ name }) { 
        try {
            const city = await City.create({ 
                name 
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id : cityId
                } , 
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId , data) { // {name : "hyderabad"}
        try {
            const city = await City.update(data , {
                where : {
                    id : cityId
                } ,
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;