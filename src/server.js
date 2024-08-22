import app from "./app.js";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
  connectDB();
});
