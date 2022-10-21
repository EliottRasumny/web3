import { useContext, useState } from "react";

import { Context as OpinionContext } from "contexts/OpinionContext";

const OpinionForm = () => {
  const { addOne } = useContext(OpinionContext);
  const [newOpinion, setNewOpinion] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addOne(newOpinion);
    setNewOpinion("");
  };

  const handleOpinionChange = (event) => {
    setNewOpinion(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={newOpinion} onChange={handleOpinionChange} />
      <button type="submit">Add Opinion</button>
    </form>
  );
};

export default OpinionForm;
