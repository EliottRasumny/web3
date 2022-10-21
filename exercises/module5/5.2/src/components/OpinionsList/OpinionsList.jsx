import { useContext } from "react";
import { Context as OpinionContext } from "contexts/OpinionContext";

const OpinionsList = () => {
  const { sortedOpinions, vote } = useContext(OpinionContext);

  const handleVote = (event, id) => {
    event.preventDefault();
    vote(id);
  };

  return sortedOpinions.map((o) => (
    <form key={o.id} onSubmit={(e) => handleVote(e, o.id)}>
      {o.name} : {o.votes} <button type="submit">Vote</button>
    </form>
  ));
};

export default OpinionsList;
