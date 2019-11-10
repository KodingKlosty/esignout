// import the express router
const router = require('express').Router();
// import the teams controller
const teamsCtrl = require('../controllers/teams');
// import the protect middleware
//const protectedRoute = require('../utils/protectedRoute');
// GET /teams route using controller middleware
router.get('/',  teamsCtrl.getAllTeams);
// GET /teams/:id
//router.get('/:id', teamsCtrl.getOneById);
// POST /teams
router.post('/',  teamsCtrl.createTeam);
// PUT /teams/:id
//router.put('/:id',  teamsCtrl.updateOrg);
// DELETE /teams/:id
router.delete('/:id',  teamsCtrl.removeTeam);
// export the route from this file
module.exports = router;