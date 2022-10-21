const Persons = ({ persons, deletePerson }) => {
  const handleDeletion = (event, id) => {
    event.preventDefault();
    deletePerson(id);
  };

  return persons.map((p) => (
    <form key={p.id} onSubmit={(e) => handleDeletion(e, p.id)}>
      {p.name} {p.number} <button type="submit">delete</button>
    </form>
  ));
};

export default Persons;
