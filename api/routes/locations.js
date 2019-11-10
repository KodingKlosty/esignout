// import the express router
const router = require('express').Router();
// import the locations controller
const locationsCtrl = require('../controllers/locations');
// import the protect middleware
// const protectedRoute = require('../utils/protectedRoute');
// GET /locations route using controller middleware
router.get('/', locationsCtrl.getAllLocations);
// GET /locations/:id
// router.get('/:id', locationsCtrl.getOneById);
// POST /locations
router.post('/', locationsCtrl.createLocation);
// PUT /locations/:id
// router.put('/:id', locationsCtrl.updateLocation);
// DELETE /locations/:id
router.delete('/:id', locationsCtrl.removeLocation);
// export the route from this file
module.exports = router;