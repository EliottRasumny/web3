const Total = ({ parts }) => {
  const total = parts.map((p) => p.exercises).reduce((a, b) => a + b, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

export default Total;
