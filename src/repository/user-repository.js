const   {user} = require("../models/index");


class UserRepository {
      async createUser(data){
         try {
            const users = await user.create(data);
            return users;
         } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error
         }
      }

      async deleteteUser(userId){
        try {
            await User.destroy({
            where: {
             id: userId
          }});
          return true;
        } catch (error) {
           console.log("Something went wrong in repository layer");
           throw(error)
        }
     }
}

module.exports = {
    UserRepository
}