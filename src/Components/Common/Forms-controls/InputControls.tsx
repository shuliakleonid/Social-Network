import React from 'react';
import styles from './InputControls.module.css'

const Input = (props: any) => {
  const {input, meta} = props
  return (
      <div>
        <input
            className={meta.touched && meta.error ? styles.error : styles.formControl}
            {...input}
            {...props} />
        <span>{meta.touched && meta.error}</span>
      </div>
  );
};

export default Input;
