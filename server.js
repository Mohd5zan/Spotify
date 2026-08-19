require("dotenv").config();
const app = require("./src/app");
const connectdb = require("./src/db/db");
connectdb();
app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
