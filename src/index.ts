import express, { Request, Response } from "express";
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  next();
});

app.get("/", (_req: Request, res: Response) => {
  return res.send({
    name: "samuel",
    age: 27,
  });
});

app.get("/ping", (_req: Request, res: Response) => {
  return res.send({
    name: "john",
    age: 23,
  });
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
