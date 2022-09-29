const express = require("express");
const bodyParser = require("body-parser");
const bookRouter = require("./routes/books");
const authorRouter = require("./routes/authors");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use("/books", bookRouter);
app.use("/authors", authorRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the book API");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log("Listening at ", PORT);
});
