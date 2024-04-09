var jwt = require('jsonwebtoken');

const { UserRepository } = require('../repository/user-repository');
const { JWT_KEY } = require('../config/serverConfig');

class UserService  {
    constructor(){
   this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log("something went wrong on service layer");
            throw error;           
        }
    }

    createToken(user){
        try {
            var token= jwt.sign(user,JWT_KEY, {expiresIn: 30});
            return token;           
        } catch (error) {
            console.log("something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went wrong in token validation");
            throw(error);
        }
    }
}



module.exports = UserService