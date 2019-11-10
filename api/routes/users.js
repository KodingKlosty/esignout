// import the express router
const router = require('express').Router();
// import the users controller
const usersCtrl = require('../controllers/users');
// import the protect middleware
// const protectedRoute = require('../utils/protectedRoute');
// GET /users route using controller middleware
router.get('/', usersCtrl.getAllUsers);
// GET /users/:id
// router.get('/:id', usersCtrl.getOneById);
// POST /users
router.post('/',  usersCtrl.createUser);
// PUT /users/:id
router.put('/:id',  usersCtrl.updateUser);
// DELETE /users/:id
router.delete('/:id',  usersCtrl.removeUser);
// export the route from this file
module.exports = router;