var jwt = require('jsonwebtoken');

const { UserRepository } = require('../repository/user-repository');
const { JWT_KEY } = require('../config/serverConfig');
const bcrypt =  require('bcrypt');

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

    async signIn(email, plainPassword){
        try {
            // step 1 -> fetch the user using the email
            const user = await this.userRepository.getByEmail(email);
            // step 2 -> compare incoming plain password with saved encrypted password
            const passwordMatch =this.checkPassword(plainPassword, user.password);
            if(!passwordMatch){
                console.log("password doesn't match");
                throw{error: "Incorrect password"};
            }
            // step 3 -> if passwords match then create a token and send it to the user
            
            const newJWT = this.createToken({email: user.email, id: user.id});
            return newJWT;
            } catch (error) {
            console.log("something went wrong in the signin process");
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

    checkPassword(userInputPassword, encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPassword, encryptedPassword);
        } catch (error) {
            console.log("something went wrong in password comparision");
            throw error;
        }

    }
}



module.exports = UserService