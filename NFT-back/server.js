const express= require("express");
const host= '192.168.1.11';

var app1 = require('./app');
var port = process.env.PORT || 3000;

var server= app1.listen(port, host, function() {
  console.log('Express server is listening on port '+ port + 'And is hosted on host ' + host);
  const all_routes = require('express-list-endpoints');
  console.log(all_routes(app1));
});


const cors = require("cors");
const app = express();
const db= require('./app/models');
const Role = db.role;
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and resync Db');
  initial();
});
function initial(){
  Role.create({
    id:1,
    name:"user"
  });

  Role.create({
    id:2,
    name:"moderator"
  });
  Role.create({
    id:3,
    name:"admin"
  });
}
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req,res) => {
  res.json({message: "Welcome to theo application"});
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, host, () => {
  console.log(`Server is running on port : ${PORT}.`);
});