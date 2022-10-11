import Header from "components/Header/Header";
import Content from "components/Content/Content";
import Total from "components/Total/Total";

import "components/App/App.css";

const App = () => {
  const course = "Half Stack application development";

  const parts = [
    ["Fundamentals of React", 10],
    ["Using props to pass data", 7],
    ["State of a component", 14],
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
