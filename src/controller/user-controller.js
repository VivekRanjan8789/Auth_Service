const  { UserService }  = require('../services/user-service');

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
            message: "something went wrong. Can't signup",
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
            message: "something went wrong. not loggedin",
            success: false,
            err: error
        })
    }
}

const isAuthenticated = async (req,res) =>{
    try{
       const token = req.headers['x-access-token'];
       const response = await userService.isAuthenticated(token); //{email: '', id:'', iat: '',exp: '' }
       return res.status(200).json({
        success: true,
        err: {},
        data: response,
         message: 'user is autenticated and token is valid'
       })
    }catch (error) {
        console.log("authentication not done");
        res.status(500).json({
        data: {},
        message: "not verified token",
        success: false,
        err: error
       })
    }
 }

module.exports = {
    create,
    signIn,
    isAuthenticated
}