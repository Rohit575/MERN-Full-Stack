import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./Helper/connect.db.helper.js";
import swaggerui from "swagger-ui-express";
// import * as swaggerDoc from "../Server/Config/swagger.json";
import swaggerDocument from "../Server/Config/swagger.json" assert { type: "json" };

dotenv.config();
const port = process.env.PORT;

const app = express();
app.get("/", (req, res) => {
  res.send("API is working");
});

// Swagger Start

app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

// Swagger End

connectDb();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
