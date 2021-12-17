const Input = (props) => {
  return (
    <div
      className={props.Type === "checkbox" ? "label-checkbox" : "label-input"}
    >
      <label htmlFor={props.Name}>{props.Placeholder}</label>
      <input
        id={props.Name}
        onChange={props.OnChange}
        type={props.Type}
        placeholder={props.Placeholder}
        className={props.Class}
        name={props.Name}
        required
        minLength={props.MinLength}
        maxLength={props.MaxLength}
      />
    </div>
  );
};
export default Input;
