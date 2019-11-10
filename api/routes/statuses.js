// import the express router
const router = require('express').Router();
// import the status controller
const statusCtrl = require('../controllers/statuses');
// import the protect middleware
//const protectedRoute = require('../utils/protectedRoute');
// GET /status route using controller middleware
router.get('/',  statusCtrl.getAllStatuses);
// GET /status/:id
// router.get('/:id', statusCtrl.getOneById);
// POST /status
// router.post('/', statusCtrl.createStatuses);
// PUT /status/:id
// router.put('/:id',  statusCtrl.updateStatuses);
// DELETE /status/:id
router.delete('/:id', statusCtrl.removeStatuses);
// export the route from this file
module.exports = router;