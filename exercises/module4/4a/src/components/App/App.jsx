import personService from "services/persons";
import Persons from "components/Persons/Persons";

import { useState, useEffect } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const loadDb = () => {
    personService.getAll().then((personsReturned) => {
      setPersons(personsReturned);
    });
  };

  useEffect(() => {
    loadDb();
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.map((p) => p.name).includes(newName)) {
      alert(`${newName} is already in the phonebook`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      personService.createOne(newPerson).then((personReturned) => {
        setPersons(persons.concat(personReturned));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const deletePerson = (id) => {
    personService.deleteOne(id).then((response) => {
      const filtered = persons.filter((p) => p.id !== id);
      setPersons(filtered);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
