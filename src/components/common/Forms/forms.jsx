import React from 'react';
import classes from './forms.module.css';
import {Field} from "redux-form";

//деструктиризация! разделям пропсы! на инпут, мета и остальные пропсы
export const Textarea = ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error;

    return <div className={classes.formControl + " " + (hasError ? classes.error : null)}>
        <div>
            <textarea  {...props} {...input}/>
        </div>
        {hasError ? <span>{error}</span> : null}
    </div>
};

export const Input = ({input, meta:{touched, error}, ...props}) => {

    const hasError = touched && error;

    return <div className={classes.formControl + " " + (hasError ? classes.error : null)}>
        <div>
            <input  {...props} {...input}/>
        </div>
        {hasError ? <span>{error}</span> : null}
    </div>
};

export const createField = (placeholder, name, component, validate, props = {}, text= '') => (
   <div>
       <Field placeholder={placeholder}
              name={name}
              component={component}
              validate={validate}
              {...props}
       />{text}
   </div>
);