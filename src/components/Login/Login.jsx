import React from 'react';
import {Field, reduxForm} from "redux-form";
import classes from './Login.module.css'
import {Input} from "../common/Forms/forms";
import {maxLength, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reduser";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLength(30);

const LoginForm = (props) => {
    return (
        <form className={classes.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} type={'password'} component={Input}
                       validate={[required, maxLength30]}/>
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
//сюда приходят все данные из формы методом onSubmit
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapDispatchToProps, {login})(Login);