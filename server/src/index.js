import express from "express";
import dotenv from "dotenv";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { auth } from "./lib/auth.js";

dotenv.config();
const app = express();

// Configure CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

// NEW Express v5 wildcard syntax
app.all("/api/auth/*splat", toNodeHandler(auth));

// JSON middleware AFTER Better Auth handler
app.use(express.json());

app.get("/api/me", async (req, res) => {
 	const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
	return res.json(session);
});


app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Your application is running on http://localhost:${process.env.PORT}`
  );
});
