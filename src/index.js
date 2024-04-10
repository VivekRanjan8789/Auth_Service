const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const { UserRepository } = require('./repository/user-repository');

const app = express();

const prepareAndStartServer = () => {
       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({extended: true}));

       app.use('/api',apiRoutes);

       app.listen(3001,async ()=>{
         console.log(`Server Started at: ${PORT}`);
        //  const repo = new UserRepository();
        //  console.log(await repo.getByEmail('vivek@gmail.com'));
         
       })
}

prepareAndStartServer();