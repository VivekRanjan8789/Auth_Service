const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

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
        //  const users = await user.findByPk(6)
        //  const response = bcrypt.compareSync(incomingpassword, users.password);
        //  console.log(response);

       })
}

prepareAndStartServer();