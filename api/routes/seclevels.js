// import the express router
const router = require('express').Router();
// import the secLevel controller
const secLevelsCtrl = require('../controllers/seclevels');
// import the protect middleware
// const protectedRoute = require('../utils/protectedRoute');
// GET /secLevel route using controller middleware
router.get('/', secLevelsCtrl.getSecLevels);
// GET /secLevel/:id
// router.get('/:id', secLevelsCtrl.getOneById);
// POST /secLevel
// router.post('/', secLevelsCtrl.createSecLevel);
// PUT /secLevel/:id
// router.put('/:id', secLevelsCtrl.updateLocation);
// DELETE /secLevel/:id
router.delete('/:id', secLevelsCtrl.removeSecLevels);
// export the route from this file
module.exports = router;