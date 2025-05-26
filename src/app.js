import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// ommon middileware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extende: true, limit: "16kb" }));
app.use(express.static("public"));

export { app };
