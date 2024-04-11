const   { user, Role } = require("../models/index");


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
            await user.destroy({
            where: {
             id: userId
          }});
          return true;
        } catch (error) {
           console.log("Something went wrong in repository layer");
           throw(error)
        }
     }

     async getById(userId){
       try {
           const users = await user.findByPk(userId, {
            attributes: ['email', 'id','password']
           });
           return users
       } catch (error) {
          console.log("something went wrong on repository layer");
          throw(error)
       }
     }

     async getByEmail(userEmail){
      try {
         const userByEmail = await user.findOne({
            where:{
               email: userEmail
            }
         });
         return userByEmail;     
      } catch (error) {
         console.log("something went wrong on repository layer while fething user details");
         throw(error)
      }
     }

     async isAdmin(userId){
        try {
         const user = await this.getById(userId);
         const adminRole = await Role.findOne({
            where:{
               name: 'ADMIN'
            }
         });
         return user.hasRole(adminRole);

         } catch (error) {
           console.log("something went wrong in repository layer");
        }
     }
}

module.exports = {
    UserRepository
}