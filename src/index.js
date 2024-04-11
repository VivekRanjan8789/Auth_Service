const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const {user, Role} = require('./models/index')

const app = express();

const prepareAndStartServer = () => {
       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({extended: true}));

       app.use('/api',apiRoutes);

       app.listen(3001,async ()=>{
         console.log(`Server Started at: ${PORT}`);
          
         const u1 = await user.findByPk(4)
         const r1 = await Role.findByPk(1)
        //  u1.addRole(r1)
         const response = await u1.hasRole(r1);
         console.log(response);
       })
}

prepareAndStartServer();