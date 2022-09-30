import { useState } from "react";

import Button from "components/Button/Button";
import Display from "components/Display/Display";

const App = () => {
  const [counter, setCounter] = useState(0);

  const changeCount = (delta) => setCounter(counter + delta);

  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} text="plus" delta={1} />
      <Button changeCount={changeCount} text="zero" delta={-counter} />
      <Button changeCount={changeCount} text="minus" delta={-1} />
    </div>
  );
};

export default App;
