const app = require("./src/app");

require("dotenv").config();
const PORT = process.env.PORT;

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
