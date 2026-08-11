import dotenv from "dotenv"

import app from "./src/app.js";
import connectDB from "./src/db/db.js"

dotenv.config()
connectDB() 

app.listen(2000, () => {
  console.log("server is running on port 2000");
});
