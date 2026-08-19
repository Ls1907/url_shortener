import express from "express";
import 'dotenv/config'

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is up and running on port ${process.env.PORT || 3000}`);
});
