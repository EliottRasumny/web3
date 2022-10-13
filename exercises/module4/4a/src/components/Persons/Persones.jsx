const Persons = ({ persons }) => {
  return persons.map((p) => <div key={p.name}>{p.name}</div>);
};

export default Persons;
