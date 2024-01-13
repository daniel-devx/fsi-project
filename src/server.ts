import express, { Application } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const port = process.env.PORT || 3000;

const app: Application = express();

const returnPath = (url: string) => {
  return path.join(__dirname, `/public/pages/${url}.html`);
};

app.use(express.static(path.join(__dirname, "public")));
app
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/pages/index.html"));
  })
  .get("/gathering", (req, res) => {
    res.sendFile(returnPath(req.url));
  })
  .get("/profile", (req, res) => {
    res.sendFile(returnPath(req.url));
  })
  .get("/login", (req, res) => {
    res.sendFile(returnPath(req.url));
  })
  .get("/register", (req, res) => {
    res.sendFile(returnPath(req.url));
  })
  .get("/investors", (req, res) => {
    res.sendFile(returnPath(req.url));
  })
  .get("/transfer", (req, res) => {
    res.sendFile(returnPath("transfer"));
  });

app.listen(port, () => {
  console.log(`Started server at http://localhost:${port}`);
});
