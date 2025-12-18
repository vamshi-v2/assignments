const  express = require ("express");
const  dotenv  = require ("dotenv");
const  userRoutes  = require ("./routes/userRoutes");
const  createStuTable  =  require ("./data/createStuTable");

dotenv.config();

const app = express();

app.use(express.json());

//routes
app.use("/api", userRoutes);

//table creation
createStuTable();

module.exports = app;
