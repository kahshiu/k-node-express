import express from "express";

const app = express();

app.get("/", (req, res) => {
  const data = "Welcome to k-node-express, your testing backend application";
  res.json(data);
});

app.get("/healthcheck", (req, res) => {
  const data = {
    commit: "commit no: 0",
  };
  res.json(data);
});

app.get("/plain-text/:text", (req, res) => {
  const plainText = req.params.text ?? "Hello world!";
  res.send(plainText);
});

app.get("/json", (req, res) => {
  const jsonData: any = {};

  console.log("tracing query", req.query);

  for (const key in req.query) {
    if (req.query[key]) {
      jsonData[key] = req.query[key];
    }
  }
  const json = jsonData ?? { data: undefined };
  res.send(json);
});

app.listen(4000);
