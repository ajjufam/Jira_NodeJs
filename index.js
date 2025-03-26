require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const connectDB = require("./src/config/db.config");

app.use(cors());
app.use(bodyParser.json());
connectDB();

app.listen(port, () => console.log(`Server listening on port ${port}`));
