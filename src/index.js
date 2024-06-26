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
          


       })
}

prepareAndStartServer();