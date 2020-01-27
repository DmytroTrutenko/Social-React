import React from 'react';
import {reduxForm} from "redux-form";
import classes from './Login.module.css'
import classes2 from './../common/Forms/forms.module.css'
import {createField} from "../common/Forms/forms";
import {maxLength, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reduser";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLength(30);

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form className={classes.loginForm} onSubmit={handleSubmit}>
            {createField('Email', 'email', "input", [required, maxLength30])}
            {createField('Password', 'password', "input", [required, maxLength30], {type:'password'})}
            {createField(null, 'rememberMe', "input", null, {type:'checkbox'}, 'remember me')}
           {error ? <span className={classes2.formSummaryError}>{error}</span> : null}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({login,isAuth}) => {
//сюда приходят все данные из формы методом onSubmit
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    };
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            <div>
                <p>Test account:</p>
                <h3>Email: testreact@mail.ru</h3>
                <h3>Password: TesterDuck</h3>
            </div>
        </>
    );
};

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapDispatchToProps, {login})(Login);