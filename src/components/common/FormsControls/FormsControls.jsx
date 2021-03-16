import React from "react";
import classes from "./FormsControls.module.scss";

export const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={`${classes.formControl} ${hasError ? classes.error : ""}`}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} className={classes.textarea} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
