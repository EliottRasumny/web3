import { useContext } from "react";

import { Context as SatisfactionContext } from "contexts/SatisfactionContext";

const OkButton = () => {
  const { increaseOk } = useContext(SatisfactionContext);

  return <button onClick={increaseOk}>increase Ok</button>;
};

export default OkButton;
