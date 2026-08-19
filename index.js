import express from "express";
import router from "./routes/userroutes.js";
import 'dotenv/config'

const app = express();
app.use(express.json());
 
app.use('/users',router);


app.listen(process.env.PORT || 3000, () => {
  console.log(`server is up and running on port ${process.env.PORT || 3000}`);
});
