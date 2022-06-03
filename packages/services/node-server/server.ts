import express from "express";
import { QueryPayload } from "@typescript-monorepo/common";

const app = express();
const port = 8000;

app.get("/data", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const data: QueryPayload = { foo: "bar" };

  res.json(data);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
