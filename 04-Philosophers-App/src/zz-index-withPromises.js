const express = require("express");

require("./db/mongoose.js");
const User = require("./models/user");
const Question = require("./models/question");

const app = express();
const port = process.env.PORT || 3000;

// parse incoming json into an onbject req.body
app.use(express.json());

app.post("/users", async (req, res) => {
  let { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password
  });

  user
    .save()
    .then(result => {
      res.status(201).send({
        result
      });
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

// see how have an async function here
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(404).send(error);
  }
})

//route parameters
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.post("/questions", (req, res) => {
  let { desc, solved, topic } = req.body;

  const question = new Question({
    desc,
    solved,
    topic
  });

  question
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.get("/questions", (req, res) => {
  Question.find({})
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(404).send(error);
    });
});

//route parameters
app.get("/questions/:id", (req, res) => {
  const id = req.params.id;

  Question.findById(id)
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
