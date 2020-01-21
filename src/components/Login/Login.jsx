import React from 'react';
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";
import classes from './Login.module.css'
import {Input} from "../common/Forms/forms";
import {maxLength, required} from "../../utils/validators/validators";

const maxLength10 = maxLength(10);

const LoginForm = (props) => {
    return (
        <form className={classes.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {  //сюда приходят все данные из формы методом onSubmit
        console.log(formData);
        authAPI.login(formData.email, formData.password)
            .then(data => {
                console.log(data);
            })
    };

    return (<>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

export default Login;