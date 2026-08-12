import express from "express";
import cookieParser from "cookie-parser";

import authRouter from "./routes/authRoutes.js";
import musicRouter from "./routes/musicRoutes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRouter);
app.use("/api", musicRouter);

export default app;
