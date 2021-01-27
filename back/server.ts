import express from "express";
import serveIndex from "serve-index";
import cors from "cors";
import { Article } from "../front/src/app/interfaces/article";

const app = express();
const port = 3000;
const www = "./public";

let articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 123 },
  { id: "a2", name: "Pince", price: 2, qty: 34 },
  { id: "a3", name: "Marteau", price: 2.5, qty: 2 },
  { id: "a4", name: "Scie", price: 10, qty: 1000 },
  { id: "a5", name: "Clé", price: 13.45, qty: 340 },
];

let nextId = 6;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log("req: ", req.url);
  next();
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});
app.post("/api/articles", (req, res) => {
  const article = req.body as Article;
  article.id = "a" + nextId;
  nextId++;
  articles.push(article);
  res.json(article);
});
app.delete("/api/articles", (req, res) => {
  const ids = req.body as string[];
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
