function MyButton({ count, handleClick }) {
  return (
    <button className="button" onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default MyButton;
