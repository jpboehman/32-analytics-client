import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { useDispatch, useSelector } from 'react-redux'; // Will import useDispatch hook and useSelector hook into component that updates global state

// import AuthService from '../services/auth.service';
import { css } from '@emotion/css';
import Footer from './common/static/Footer';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Divider } from 'antd';
import { login } from '../redux/apiCalls';
import ForgotPassword from './ForgotPassword';

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required.
      </div>
    );
  }
};

export const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  // Solid practice is making pieces of state objects rather than multiple separate variables
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
   // useSelector allows us to access Redux's global state values and place them into local variables
  const currentUser = useSelector((state) => state.currentUser?.payload);

  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(`The form that was updated is ${e.target.name} and the value is: ${e.target.value}`)
  }

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      const { username, password } = formData;
      login(dispatch, { username, password }); // Passing in dispatch because it allows us to update state within that function
      if (currentUser) {
        setLoading(false);
        setMessage('success');
        setTimeout(() => {
          window.location.pathname = '/profile';
        }, 2000);
      }
      if (!currentUser) {
        setTimeout(() => {
          setLoading(false);
          setMessage('Invalid Login Parameters');
        }, 2100);
      }
    }
  };

  return (
    <div
      className={css`
        text-align: center;
        justify-content: center;
      `}
    >
      <div
        className={css`
            margin: 50px;
            padding-top: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
        `}
      >
        <Card title={`Login`} >
          <Form
            onSubmit={handleLogin}
            ref={form}
            layout='vertical'
            size='default'
            className={css`margin-bottom: 15px;`}
          >
            <div className='form-group'>
              <label
                htmlFor='username'
                className={css`
                  margin-right: 5px;
                `}
              >
                Username
              </label>
              <UserOutlined />
              <Input
                type='text'
                className='form-control'
                name='username'
                value={formData.username}
                onChange={onChangeInput}
                validations={[required]}
              />
            </div>

            <div className='form-group'>
              <label
                htmlFor='password'
                className={css`
                  margin-right: 5px;
                `}
              >
                Password
              </label>{' '}
              <LockOutlined />
              <Input
                type='password'
                className='form-control'
                name='password'
                value={formData.password}
                onChange={onChangeInput}
                validations={[required]}
              />
            </div>
            <div className='form-group'>
              <button className='btn btn-primary btn-block' disabled={loading}>
                {loading && (
                  <span className='spinner-border spinner-border-sm' />
                )}
                <span>Login</span>
              </button>
              <Divider />
              <Button type='link' href='forgot-password'>Forgot Password?</Button>
            </div>
            {message && (
              <div className='form-group'>
                <div className='alert alert-danger' role='alert'>
                  {!currentUser ? message : 'something went wrong'}
                </div>
              </div>
            )}
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Login;