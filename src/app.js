import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// common middileware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extende: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//Import Routs
import healthcheckRouter from "./routs/healthcheck.routs.js";

//routs

app.use("/api/v1/healthcheck", healthcheckRouter);

export { app };
