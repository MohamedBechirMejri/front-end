const Button = props => {
  return (
    <button onClick={props.OnClick} className={props.ClassName}>
      {props.Icon && <i className={"bi " + props.Icon} />}
      {props.ButtonName}
    </button>
  );
};

export default Button;
