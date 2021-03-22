import React from 'react';
import {Field} from 'redux-form';

const LoginForm = (props:any) => {
  return (
      <>
        <form onSubmit={props.handleSubmit}>
          <Field placeholder='Login' type="text" component='input' name='login'/>
          <div>
            <Field placeholder='Password' type="password" component='input' name='password'/>
          </div>
          <Field type="checkbox" component='input' name='rememberMe'/><span> Remember Me!</span><br/>
          <button>Login</button>
        </form>
      </>
  );
};

export default LoginForm;
