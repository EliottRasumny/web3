import { useContext } from "react";

import { Context as SatisfactionContext } from "contexts/SatisfactionContext";

const GoodButton = () => {
  const { increaseGood } = useContext(SatisfactionContext);

  return <button onClick={increaseGood}>increase Good</button>;
};

export default GoodButton;
