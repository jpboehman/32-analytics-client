import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { useDispatch, useSelector } from 'react-redux';

// import AuthService from '../services/auth.service';
import axios from 'axios';
import { css } from '@emotion/css';
import { generalRequest } from '../services/httpService';
import Footer from './common/static/Footer';

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { login, resetPassword } from '../redux/apiCalls';

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required.
      </div>
    );
  }
};

// Used as a forgot password component
export const ForgotPassword = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser?.payload);

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const sendEmail = async (e) => {
      e.preventDefault();
      if (!email.length) {
          setError('Please enter a valid email address')
      } else {
          try {
            // const { data } = await generalRequest.post(`/auth/reset-password`, { email });
            const { data } = await axios.post(`http://localhost:8080/api/auth/forgot-password`, { email });
            console.log(data)
            if (!data) {
                setError('Email not found - please try again');
                return;
            } else {
                setMessage('Recovery email sent!');
            }
          } catch (error) {
             setError('Email not found or network error, please try again.');
          } 
      }
  }

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
        <Card title={`Email`}>
          <Form
            onSubmit={sendEmail}
            ref={form}
            layout='vertical'
            size='default'
            className={css`margin-bottom: 15px;`}
            validateMessages={validateMessages}
          >
            <div className='form-group'>
              <label
                htmlFor='email'
                className={css`
                  margin-right: 5px;
                `}
              >
                Email
              </label>
              <MailOutlined />
              <Input
                type='text'
                className='form-control'
                name='email'
                value={email}
                onChange={onChangeEmail}
                validations={[required]}
              />
            </div>

            <div className='form-group'>
              <button className='btn btn-primary btn-block' disabled={loading}>
                {loading && (
                  <span className='spinner-border spinner-border-sm' />
                )}
                <span>Send reset email</span>
              </button>
            </div>
            {message && (
                <div className='form-group'>
                    <div className='alert alert-success' role='alert'>
                    {message}
                    </div>
              </div>
            )}
            {error && (
             <div className='form-group'>
                    <div className='alert alert-danger' role='alert'>
                    {error}
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

export default ForgotPassword;