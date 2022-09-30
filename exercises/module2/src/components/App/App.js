import { useState } from "react";

import Button from "components/Button/Button";
import Display from "components/Display/Display";

const App = () => {
  const [counter, setCounter] = useState(0);

  const changeCount = (delta) => setCounter(counter + delta);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={changeCount} text="plus" data-delta={1} />
      <Button onClick={changeCount} text="zero" data-delta={-counter} />
      <Button onClick={changeCount} text="minus" data-delta={-1} />
    </div>
  );
};

export default App;
