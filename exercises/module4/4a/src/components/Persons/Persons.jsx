const Persons = ({ persons, deletePerson }) => {
  const handleDeletion = (event) => {
    event.preventDefault();
    deletePerson(event.target.getAttribute("idperson"));
  };

  return persons.map((p) => (
    <form key={p.id} onSubmit={handleDeletion} idperson={p.id}>
      {p.name} {p.number} <button type="submit">delete</button>
    </form>
  ));
};

export default Persons;
