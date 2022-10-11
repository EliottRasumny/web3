import Header from "components/Header/Header";
import Content from "components/Content/Content";
import Total from "components/Total/Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
