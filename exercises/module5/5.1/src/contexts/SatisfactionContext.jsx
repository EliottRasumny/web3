import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [goodCount, setGoodCount] = useState(0);
  const [okCount, setOkCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const increaseGood = () => {
    setGoodCount(goodCount + 1);
  };
  const increaseOk = () => {
    setOkCount(okCount + 1);
  };
  const increaseBad = () => {
    setBadCount(badCount + 1);
  };
  const reset = () => {
    setGoodCount(0);
    setOkCount(0);
    setBadCount(0);
  };

  const exposedValue = {
    goodCount,
    increaseGood,
    okCount,
    increaseOk,
    badCount,
    increaseBad,
    reset,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
