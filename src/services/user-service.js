const { UserRepository } = require('../repository/user-repository');

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
}



module.exports = UserService