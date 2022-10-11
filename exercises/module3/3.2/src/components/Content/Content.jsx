import Part from "components/Part/Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises}></Part>
      ))}
    </div>
  );
};

export default Content;
