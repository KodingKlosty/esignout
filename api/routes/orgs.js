// import the express router
const router = require('express').Router();
// import the orgs controller
const orgsCtrl = require('../controllers/orgs');
// import the protect middleware
//const protectedRoute = require('../utils/protectedRoute');
// GET /orgs route using controller middleware
router.get('/', orgsCtrl.getAllOrgs);
// GET /orgs/:id
//router.get('/:id', orgsCtrl.getOneById);
// POST /orgs
router.post('/', orgsCtrl.createOrg);
// PUT /orgs/:id FOR LATER DATE 
//router.put('/:id', orgsCtrl.updateOrg);
// DELETE /orgs/:id
router.delete('/:id', orgsCtrl.removeOrg);
// export the route from this file
module.exports = router; 