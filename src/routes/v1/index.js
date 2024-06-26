const  express  = require('express');
const userController = require('../../controller/user-controller');

const { AuthRequestValidators } = require('../../middleware/index');
const { validateIsAdminRequest } = require('../../middleware/auth-request-validators');


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

router.get(
    '/isAuthenticate',
     userController.isAuthenticated
);

router.get(
    '/isAdmin',
    AuthRequestValidators.validateIsAdminRequest,
    userController.isAdmin
);

module.exports = router;