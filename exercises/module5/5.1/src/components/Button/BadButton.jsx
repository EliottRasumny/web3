import { useContext } from "react";

import { Context as SatisfactionContext } from "contexts/SatisfactionContext";

const BadButton = () => {
  const { increaseBad } = useContext(SatisfactionContext);

  return <button onClick={increaseBad}>increase Bad</button>;
};

export default BadButton;
