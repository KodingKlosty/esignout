//import
const { SecLevels } = require('../models')
console.log("SecLevels: ", SecLevels)

//get all secLevelss by orgId
exports.getSecLevels = async (req, res) => {
    const{secLevel} = req.query;
    const apisecLevels = await SecLevels.findAll();
    res.json(apisecLevels)
}

// delete a secLevels
exports.removeSecLevels = async (req, res) => {
    // get the id from the route
    const { id } = req.params;
    // remove the decision
    await secLevels.destroy({ where: { id } });
    // send a good status code
    res.sendStatus(200);
  };