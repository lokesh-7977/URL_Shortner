import express from "express";
import cors from "cors";
import urlRoutes from "./routes/url.routes.js";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/health", (req, res) => {
    res.status(200).json({message: "API Health is Good"});
});

app.use("/api/url", urlRoutes);

export default app;
