const {Users} = require('../models')
console.log('Users: ', Users)

//get all users
exports.getAllUsers = async (req, res) => {
    const allUsers = await Users.findAll({where: req.query.teamId})
    res.json(allUsers)
}
// create an user
exports.createUser = async (req,res) => {
  const  {id, name, username, password, 
    teamid, level, location, 
    status, slackToken, notes} = req.body;
    try{
        const User = await users.create({
            id, name, username, password, 
            teamid, level, location, 
            status, slackToken, notes})
        res.json({id: User.id})
    } catch(e){
        const errors = e.errors.map(err => err.message);
        res.status(400).json({ errors });
    }
}
// update user
exports.updateUser = async (req, res) => {
    try{
    const updatedUser = await choices.update(req.body, {
        where: { id },
        returning: true
      });
      // send the updated decision back to the front-end
      res.json(updatedUser);
    } catch (e) {
      // map the errors messages to send them back
      const errors = e.errors.map(err => err.message);
      res.status(400).json({ errors });
    }
}

// delete a user
exports.removeUser = async (req, res) => {
    // get the id from the route
    const { id } = req.params;
    // remove the decision
    await users.destroy({ where: { id } });
    // send a good status code
    res.sendStatus(200);
  };