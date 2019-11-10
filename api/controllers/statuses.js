//import
const { Status } = require('../models')
console.log(Status)

//get all Statuses by orgId
exports.getAllStatuses = async (req, res) => {
    const apiStatuses = await Status.findAll();
    res.json(apiStatuses)
}

// delete a Statuses
exports.removeStatuses = async (req, res) => {
    // get the id from the route
    const { id } = req.params;
    // remove the decision
    await statuses.destroy({ where: { id } });
    // send a good status code
    res.sendStatus(200);
  };