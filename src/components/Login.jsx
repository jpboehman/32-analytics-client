import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { useDispatch, useSelector } from 'react-redux';

// import AuthService from '../services/auth.service';
import { css } from '@emotion/css';
import Footer from './common/static/Footer';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { login } from '../redux/apiCalls';

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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser?.payload);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      login(dispatch, { username, password });
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
            padding: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
        `}
      >
        <Card title={`Login`}>
          <Form
            onSubmit={handleLogin}
            ref={form}
            // labelCol={{ span: 4 }}
            // wrapperCol={{ span: 14 }}
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
                value={username}
                onChange={onChangeUsername}
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
                value={password}
                onChange={onChangePassword}
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