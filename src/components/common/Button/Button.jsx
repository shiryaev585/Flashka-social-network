import classes from "./Button.module.scss"

const Button = (props) => {
    return <button {...props} className={classes.btn}>{props.children}</button>
}

export default Button;