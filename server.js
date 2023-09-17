const http = require("http");
const app = require("./app")


const dbconfig = require("./config/dbconfig")
require("dotenv").config();

const server = http.createServer(app);

const proroutes = require("./routes/proroutes");
app.use(express.json());
app.use("/api/project", proroutes);




app.listen(5500 , ()=>{
    console.log("server is running in 5000");
});


