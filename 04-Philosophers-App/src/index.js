const express = require("express");

require("./db/mongoose.js");
const User = require("./models/user");
const Question = require("./models/question");

const app = express();
const port = process.env.PORT || 3000;

// parse incoming json into an onbject req.body
app.use(express.json());

app.post("/users", async (req, res) => {
  let { age, name, email, password } = req.body;

  const user = new User({
    age,
    name,
    email,
    password
  });

  console.log(user)
  try {
    const result = await user.save();
    res.status(201).send({
      result
    });
  } catch (error) {
    res.status(400).send(error);
  }
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
app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send(error);
  }
});

//patch is used for updating an already existing resource
app.patch('/users/:id', async (req, res) => {
  // updates is a list of req.bpdy properties
  const updates = Object.keys(req.body)
  const allowedKeys = ['name', 'age', 'email', 'password'];
  const isValidOperation = updates.every(update => {
    return allowedKeys.includes(update);
  })

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
  }
  try {
    const id = req.params.id;
    //options: "new" returns the updated user and not the old one
    // "runValidators": make sure validators are ran
    const user = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);

  }
})

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send();
    }
    res.send(user)
  } catch (error) {
    res.status(500).send();
  }
})

app.post("/questions", async (req, res) => {
  let { desc, solved, topic } = req.body;

  const question = new Question({
    desc,
    solved,
    topic
  });

  try {
    const result = await question.save();
    res.status(201).send(result);

  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/questions", async (req, res) => {
  try {
    const results = await Question.find({});
    res.send(results)
  } catch (error) {
    res.status(404).send(error);
  }
});

//route parameters
app.get("/questions/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Question.findById(id);
    if (!result) {
      return res.status(404).send();
    }
    res.send(result)
  } catch (error) {
    res.status(500).send(error);
  }
});

//patch is used for updating an already existing resource
app.patch('/questions/:id', async (req, res) => {
  // updates is a list of req.bpdy properties
  const updates = Object.keys(req.body)
  const allowedKeys = ['desc', 'solved', 'topic'];
  const isValidOperation = updates.every(update => {
    return allowedKeys.includes(update);
  })

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  try {
    const id = req.params.id;
    //options: "new" returns the updated user and not the old one
    // "runValidators": make sure validators are ran
    const question = await Question.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!question) {
      return res.status(404).send();
    }
    res.send(question);
  } catch (error) {
    res.status(400).send(error);

  }
})

app.delete('/questions/:id', async (req, res) => {
  try {
    const { id } = req.params
    const question = await Question.findByIdAndDelete(id);

    if (!question) {
      return res.status(404).send();
    }
    res.send(question)
  } catch (error) {
    res.status(500).send();
  }
})
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
