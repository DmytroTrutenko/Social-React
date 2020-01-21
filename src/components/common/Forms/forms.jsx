import React from 'react';
import classes from './forms.module.css';

//деструктиризация! разделям пропсы! на инпут, мета и остальные пропсы
export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return <div className={classes.formControl + " " + (hasError ? classes.error : null)}>
        <div>
            <textarea  {...props} {...input}/>
        </div>
        {hasError ? <span>{meta.error}</span> : null}
    </div>
};

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return <div className={classes.formControl + " " + (hasError ? classes.error : null)}>
        <div>
            <input  {...props} {...input}/>
        </div>
        {hasError ? <span>{meta.error}</span> : null}
    </div>
};