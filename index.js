import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./Helper/connect.db.helper.js";
import swaggerui from "swagger-ui-express";
import {  SwaggerUIBundle,  SwaggerUIStandalonePreset,} from "swagger-ui-dist"; // do not remove this line this is regarding swagger setup
import swaggerDocument from "./Config/swagger.json" with { type: "json" };
import authRoute from "./Routes/auth.route.js";
import cors from "cors";

dotenv.config();
const port = process.env.PORT;
const CSS_URL = "https://unpkg.com/swagger-ui-dist/swagger-ui.css";
const app = express();


// middlewares for recognising incoming request as JSON object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("API is working");
});

// Swagger Start
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument, { customCssUrl: CSS_URL }));
// Swagger End

app.use("/", authRoute);

connectDb();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
