const Persons = ({ persons }) => {
  return persons.map((p) => <div>{p.name}</div>);
};

export default Persons;
