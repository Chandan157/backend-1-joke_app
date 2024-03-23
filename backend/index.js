import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke 1",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is a joke no 2",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "This is a joke no 3",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
