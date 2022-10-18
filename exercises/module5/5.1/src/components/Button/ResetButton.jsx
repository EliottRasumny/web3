import { useContext } from "react";

import { Context as SatisfactionContext } from "contexts/SatisfactionContext";

const ResetButton = () => {
  const { reset } = useContext(SatisfactionContext);

  return <button onClick={reset}>Reset</button>;
};

export default ResetButton;
