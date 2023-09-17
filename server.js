const http = require("http");

const app = require("./app")
const dbconfig = require("./config/dbconfig")
require("dotenv").config();

const server = http.createServer(app);






app.listen(5500 , ()=>{
    console.log("server is running in 5000");
});


