//import
const { Locations } = require('../models')
//get all locations by orgId
exports.getAllLocations = async (req, res) => {
    console.log(req.query)
    const apiLocations = await Locations.findAll({where: req.query.orgId})
    res.json(apiLocations)
}
// createLocation
exports.createLocation = async (req,res) => {
    const  {id, locationName} = req.body; 
      try{
          const location = await Locations.create({id, locationName})
          res.json({id: location.id})
      } catch(e){
          const errors = e.errors.map(err => err.message);
          res.status(400).json({ errors });
      }
  }
// delete a location
exports.removeLocation = async (req, res) => {
    // get the id from the route
    const { id } = req.params;
    // remove the decision
    await location.destroy({ where: { id } });
    // send a good status code
    res.sendStatus(200);
  };