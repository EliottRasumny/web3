import { useContext } from "react";

import { Context as SatisfactionContext } from "contexts/SatisfactionContext";

import GoodButton from "components/Button/GoodButton";
import OkButton from "components/Button/OkButton";
import BadButton from "components/Button/BadButton";
import ResetButton from "components/Button/ResetButton";

function App() {
  const { goodCount, okCount, badCount } = useContext(SatisfactionContext);

  return (
    <div className="App">
      <ul>
        <li>
          Good : {goodCount} <GoodButton />
        </li>
        <li>
          Ok : {okCount} <OkButton />
        </li>
        <li>
          Bad : {badCount} <BadButton />
        </li>
      </ul>
      <ResetButton />
    </div>
  );
}

export default App;
