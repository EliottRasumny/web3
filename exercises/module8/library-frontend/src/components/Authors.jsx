import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { ALL_AUTHORS, EDIT_AUTHOR } from "../graphql-querries";

const Authors = ({ show }) => {
  const result = useQuery(ALL_AUTHORS);
  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  const [name, setName] = useState("");
  const [born, setBorn] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    editAuthor({
      variables: { name, setBornTo: parseInt(born) },
    });

    setName("");
    setBorn("");
  }

  if (!show) {
    return null;
  }

  if (result.loading) {
    return <div>loading...</div>;
  }

  const authors = result.data.allAuthors;

  return (
    <div>
      <h2>Authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Set birthyear</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          born{" "}
          <input
            type="number"
            value={born}
            onChange={(e) => setBorn(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">update author</button>
        </div>
      </form>
    </div>
  );
};

export default Authors;
