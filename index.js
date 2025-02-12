import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./Helper/connect.db.helper.js";
import swaggerui from "swagger-ui-express";
import {  SwaggerUIBundle,  SwaggerUIStandalonePreset,} from "swagger-ui-dist";
import swaggerDocument from "./Config/swagger.json" with { type: "json" };

dotenv.config();
const port = process.env.PORT;

const CSS_URL = "https://unpkg.com/swagger-ui-dist/swagger-ui.css";

const app = express();
app.get("/", (req, res) => {
  res.send("API is working");
});

// Swagger Start

app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument, CSS_URL));

// Swagger End

connectDb();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
