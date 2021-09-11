function Button(props) {
  return (
    <button onClick={props.onClick} style={{ backgroundColor: props.bcolor }}>
      {props.text}
    </button>
  );
}

Button.defaultProps = { bcolor: "gray" };

export default Button;
