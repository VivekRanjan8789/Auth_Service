const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const {UserRepository} = require('./repository/user-repository');
// const {user} = require('./models/index');
// const bcrypt = require('bcrypt');

const app = express();

const prepareAndStartServer = () => {
       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({extended: true}));

       app.use('/api',apiRoutes);

       app.listen(3001,async ()=>{
         console.log(`Server Started at: ${PORT}`);
        //  const incomingpassword = '123456'
        //  const repo = new UserRepository();
        //   const users = await repo.getById(4);
        //  const response = bcrypt.compareSync(incomingpassword, users.password);
        //  console.log(response);
        //  console.log(users);

       })
}

prepareAndStartServer();