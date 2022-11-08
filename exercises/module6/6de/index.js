require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { findByIdAndRemove } = require("./models/person");
const Person = require("./models/person");

// Initializers. These blocks should be placed in different files, for example middlewares.js, server.js...
// but let's keep this simple.
const app = express();

app.use(express.json());

morgan.token("body", (request) => {
  return JSON.stringify(request.body);
});
morgan.token("currentUserEmail", (request) => {
  return (request.currentUser && request.currentUser.email) || "anonymous";
});
const logger = morgan(
  ":method :url :status :res[content-length] - :response-time ms :body (:currentUserEmail)"
);
app.use(logger);

const attachCurrentuser = (request, response, next) => {
  const email = request.header("X-USER-EMAIL");
  if (email) request.currentUser = { email };
  next();
};
app.use(attachCurrentuser);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Routes. These blocks should be placed in different files under "routes/" directory ///////////////////////////////////////
// but let's keep this simple.
app.get("/info", (request, response) => {
  const now = new Date();
  Person.find({}).then((allPersons) => {
    const bodyContentText = `
      Phonebook has info for ${allPersons.length} people.
      ${now.toString()}
    `;
    response.type("text").send(bodyContentText);
  });
});

app.get("/api/persons", (request, response) => {
  Person.find({}).then((allPersons) => response.json(allPersons));
});

app.get("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  Person.findById(id)
    .exec()
    .then((personFound) => {
      if (personFound) {
        response.json(personFound);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  //Person.findByIdAndRemove()
  Person.findByIdAndDelete(id)
    .exec()
    .then((personFound) => {
      if (personFound) {
        response.json(personFound);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (body.name === undefined && body.number === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  /*
  Person.find({ name: person.name })
    .exec()
    .then((response) => {
      if (response.length !== 0) {
      }
    });

  */
  person.save().then((personSaved) => response.json(personSaved));
});

/////////////////////////////////////Errors///////////////////////////////////////////

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

// this has to be the last loaded middleware.
app.use(errorHandler);
