import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { css } from '@emotion/css';
import { generalRequest } from '../services/httpService';
import Footer from './common/static/Footer';

import { LockOutlined, MailOutlined } from '@ant-design/icons';
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

export const ResetPassword = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [updated, setUpdated] = useState(false);
  // A react-hook way of obataining query value parameters from the URL
  const { token } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser?.payload);

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };

  // Validates that the user has a valid token when accessing the site
  useEffect(() => {
    const tokenValidResponse = async (token) => {
      try {
      const { data } = await generalRequest.get(`/auth/reset`, { 
          params: {
          resetPasswordToken: token,
        }
      });
        setUsername(data.username);
      } catch (error) {
        console.log(error);
      }
    }
    tokenValidResponse(token);
  }, [token]);

  const onChangePassword = event => {
    setPassword(event.target.value);
  }

  const updatePassword = async (event) => {
    event.preventDefault();
    try {
      const { data } = await generalRequest.put(`/auth/update-password-via-email`, {
        username, password, resetPasswordToken: token
      })
        if (data) {
          setMessage('Password updated successfully!');
          setUpdated(true);
          setError(false);
          setTimeout(() => {
							window.location.pathname = '/login';
						}, 2000);
        } else {
          setMessage('Password reset unsuccessful, please try again')
          setUpdated(false);
          setError(true);
        }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  // TODO: Make sure username is set before showing this screen. IF not, the token isn't valid and redirect to register page
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
        {token && (
          <Card title={`Reset Password`}>
          <Form
            onSubmit={updatePassword}
            ref={form}
            layout='vertical'
            size='default'
            className={css`margin-bottom: 15px;`}
            validateMessages={validateMessages}
          >
            <div className='form-group'>
              <label
                htmlFor='password'
                className={css`
                  margin-right: 5px;
                `}
              >
                Password
              </label>
              <MailOutlined />
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
                <span>Set new password</span>
              </button>
            </div>
                <div className='form-group'>
                    {updated && !error && (
                        <div className='alert alert-success' role='alert'>
                        {message}
                    </div>
                    )}
                    {!updated && error && (
                        <div className='alert alert-danger' role='alert'>
                        {error}
                    </div>
                    )}
              </div>
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </Card>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;