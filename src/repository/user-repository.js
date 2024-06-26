const   { user, Role } = require("../models/index");
const ValidationError = require('../utils/validation-error');
const ClientError = require('../utils/client-error');
const { StatusCodes } = require('http-status-codes');

class UserRepository {
      async createUser(data){
         try {
            const users = await user.create(data);
            return users;
         } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
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
         // console.log(userByEmail); // null -> if username or password is incorrect in request
         if(!userByEmail){
            throw new ClientError(
               'AttributeNotFound',
               'Invalid email sent in the request',
               'Please check the email as there is no record of the email',
               StatusCodes.NOT_FOUND
            );
         }
         return userByEmail;     
      } catch (error) {
         console.log(error);
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