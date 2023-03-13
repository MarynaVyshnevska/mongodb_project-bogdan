// Maryna
// Owu82L1o5XjpXL8W
const mongoose = require("mongoose");

const { DB_HOST } = require('./config');

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch((error) => console.log(error.message));
