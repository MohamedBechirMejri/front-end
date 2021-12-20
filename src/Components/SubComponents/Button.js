const Button = (props) => {
  return (
    <button
      onClick={props.OnClick}
      className={
        props.ClassName +
        " relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white  border border-transparent rounded-md discord-button group  focus:outline-none focus:ring-2 focus:ring-offset-2 "
      }
    >
      {props.Icon && <i className={"bi " + props.Icon} />}
      {props.ButtonName}
    </button>
  );
};

export default Button;
