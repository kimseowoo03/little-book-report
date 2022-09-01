import classes from "./Button.module.css"

const Button = ({ type, value }) => {
  return <button className={classes.button} type={type}>{value}</button>;
};

export default Button;
