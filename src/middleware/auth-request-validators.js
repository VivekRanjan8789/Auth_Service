const validateUserSignup = (req, res, next) => {
        if(!(req.body.email) || !(req.body.password)) {
            return res.status(400).json({
                success: false,
                data: {},
                message : "something went wrong",
                err: 'email or password is missing in the request'
            })
        }

        next();
}

const validateIsAdminRequest = (req, res, next) => {
        if(!(req.body.id)){
            return res.status(400).json({
                success: false,
                data: {},
                message: "something went wrong",
                err: 'id is missing in request'
            })
        }

        next();
}
module.exports = {
    validateUserSignup,
    validateIsAdminRequest
}