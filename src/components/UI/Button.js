import classes from "../../styles/Button.module.scss"

const Button = ({children, ...rest}) => {
  return <button className={classes.button} {...rest}>{children}</button>;
};

export default Button;
