// Maryna
// Owu82L1o5XjpXL8W
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Maryna:Owu82L1o5XjpXL8W@cluster0.nmxzhwe.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch((error) => console.log(error.message));
