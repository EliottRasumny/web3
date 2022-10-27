const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://eliott:${password}@cluster0.prkzyys.mongodb.net/persone?retryWrites=true&w=majority`;

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

mongoose
  .connect(url)
  .then(() => {
    console.log("connected");

    if (process.argv.length === 3) {
      return Person.find({}).then((result) => {
        result.forEach((p) => {
          console.log(p.name + " " + p.number);
        });
      });
    }

    const person = new Person({
      name: process.argv[3],
      number: process.argv[4],
    });

    return person.save();
  })
  .then(() => {
    return mongoose.connection.close();
  })
  .catch((err) => console.log(err));
