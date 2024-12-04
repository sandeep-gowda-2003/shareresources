import mongoose from "mongoose";


const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.4";

mongoose
  .connect(uri)
  .then(() => console.log("successfully connected"))
  .catch(() => console.log("not connected"));
