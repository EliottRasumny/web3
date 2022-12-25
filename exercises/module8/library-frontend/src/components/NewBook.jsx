import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK, ALL_AUTHORS, ALL_BOOKS } from "../graphql-querries";

const NewBook = ({ show }) => {
  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }, { query: ALL_AUTHORS }],
  });

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState([]);

  if (!show) {
    return null;
  }

  function handleSubmit(event) {
    event.preventDefault();
    addBook({
      variables: { title, published: parseInt(published), author, genres },
    });

    setTitle("");
    setAuthor("");
    setPublished("");
    setGenre("");
    setGenres([]);
  }

  return (
    <div>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          title{" "}
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          author{" "}
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          published{" "}
          <input
            type="number"
            value={published}
            onChange={(e) => setPublished(e.target.value)}
          />
        </div>
        <div>
          <div>
            <input value={genre} onChange={(e) => setGenre(e.target.value)} />
            <button
              type="button"
              onClick={() => {
                setGenres(genres.concat(genre));
                setGenre("");
              }}
            >
              add genre
            </button>
          </div>
          <div>genres: {genres.join(" ")}</div>
        </div>
        <div>
          <button type="submit">create book</button>
        </div>
      </form>
    </div>
  );
};

export default NewBook;
