const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,

} = require('../../controllers/userController.js');

router.route("/").get(getUsers);

module.exports = router;