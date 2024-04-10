const  express  = require('express');
const userController = require('../../controller/user-controller');

const { AuthRequestValidators } = require('../../middleware/index');


const router = express.Router();

router.post(
    '/signup',
    AuthRequestValidators.validateUserSignup,
    userController.create
);

router.post(
    '/signin', 
     AuthRequestValidators.validateUserSignup,
     userController.signIn
);

router.get('/isAuthenticate', userController.isAuthenticated)

module.exports = router;