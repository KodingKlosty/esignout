const  {Orgs}  = require('../models')
//get all orgs
exports.getAllOrgs = async (req, res) => {
    const allOrgs = await Orgs.findAll()
    res.json(allOrgs)
}
// create an org
exports.createOrg = async (req,res) => {
  const  {id, orgName , superUser} = req.body; 
    try{
        const cOrgs = await orgs.create({id, orgName, superUser})
        res.json({id: cOrgs.id})
    } catch(e){
        const errors = e.errors.map(err => err.message);
        res.status(400).json({ errors });
    }
}

// delete a org
exports.removeOrg = async (req, res) => {
    // get the id from the routeß
    const { id } = req.params;
    // remove the decision
    await location.destroy({ where: { id } });
    // send a good status code
    res.sendStatus(200);
  };