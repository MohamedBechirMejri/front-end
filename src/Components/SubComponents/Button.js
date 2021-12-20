const Button = (props) => {
  return (
    <button
      onClick={props.OnClick}
      className={
        props.ClassName +
        " relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white  m-1 rounded-md group active:scale-90 hover:shadow-lg"
      }
    >
      {props.Icon && <i className={"bi " + props.Icon} />}
      {props.ButtonName}
    </button>
  );
};

export default Button;
