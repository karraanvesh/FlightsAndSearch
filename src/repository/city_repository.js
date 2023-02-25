const {City} = require('../models/index');
const { Op } = require('sequelize');

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
            // The below approach also works but will not return the updated object
            // if you are using Pg returning true can be used , else not
            // const city = await City.update(data , {
            //     where : {
            //         id : cityId
            //     } ,
            // });
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
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

    async getAllCities(filter){
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;