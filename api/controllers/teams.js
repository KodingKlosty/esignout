const {Teams} = require('../models')

//get all teams
exports.getAllTeams = async (req, res) => {
    console.log(req.query)
    const allTeams = await Teams.findAll({where: req.query.orgId })
    res.json(allTeams)
}

// create an team
exports.createTeam = async (req,res) => {
  const  {id, teamName, teamManager, orgid, location} = req.body;
    try{
        const cTeams = await Teams.create({id, teamName, teamManager, orgid, location})
        res.json({id: cTeams.id})
    } catch(e){
        const errors = e.errors.map(err => err.message);
        res.status(400).json({ errors });
    }
}

// delete a team
exports.removeTeam = async (req, res) => {
    // get the id from the route
    const { id } = req.params;
    // remove the decision
    await Teams.destroy({ where: { id } });
    // send a good status code
    res.sendStatus(200);
  };