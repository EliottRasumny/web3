
import Loading from "components/Loading/Loading";
import { useState } from "react";

const App = () => {
  const [isLoading, setLoad] = useState(true);

  const loadAfter3 = () => {
    setTimeout(load, 3000)
  }

  const load = () =>{ setLoad(false)}

  return (
    <div>
      <Loading isLoading={isLoading} loadAfter3={loadAfter3}></Loading>
    </div>
  );
};

export default App;
