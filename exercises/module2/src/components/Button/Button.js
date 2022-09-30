const Button = ({ onClick, text, delta }) => {
  const handleClick = (e) => onClick(parseInt(e.target.dataset.delta));

  return (
    <button onClick={handleClick} data-delta={delta}>
      {text}
    </button>
  );
};

export default Button;
