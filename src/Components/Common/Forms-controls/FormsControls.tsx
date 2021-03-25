import React from 'react';
import styles from './FormsControls.module.css'

const Textarea = (props: any) => {
  const {input, meta} = props
  // console.log(meta.touched)
  return (
      <div>
        <textarea
            className={meta.touched && meta.error ? styles.error : styles.formControl}
            // style={{border: '3px solid red'}}
            {...input}
            {...props} />
        <span>{meta.touched && meta.error}</span>
      </div>
  );
};

export default Textarea;
