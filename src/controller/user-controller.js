const  UserService  = require('../services/user-service');

const userService = new UserService();

const create = async (req,res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(200).json({
             success: true,
             message: "created a new user successfull",
             data: response,
             err: {},

        });
     } catch (error) {
        console.log("something went wrong on controller layer");
        res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        })
    }
} 

const signIn = async (req, res) => {
    try {
        console.log(req.body.email);
        const response = await userService.signIn(req.body.email,req.body.password);

        return res.status(200).json({
            success: true,
            message: "signin successfully",
            data: response,
            err: {},

       });
        
    } catch (error) {
        console.log("either email or password is incorrect");
        res.status(500).json({
            data: {},
            message: "not logged in",
            success: false,
            err: error
        })
    }
}

module.exports = {
    create,
    signIn
}