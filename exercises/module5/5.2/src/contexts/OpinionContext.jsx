import React, { useState } from "react";
import uuid from "react-uuid";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [opinionsList, setOpinionsList] = useState([]);

  const addOne = (opinion) => {
    setOpinionsList(
      opinionsList.concat({ id: uuid(), name: opinion, votes: 1 })
    );
  };

  const vote = (id) => {
    setOpinionsList(
      opinionsList.map((o) => (o.id !== id ? o : { ...o, votes: o.votes + 1 }))
    );
  };

  const sortedOpinions = opinionsList.sort((a, b) => a.votes < b.votes);

  const exposedValue = {
    sortedOpinions,
    addOne,
    vote,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
