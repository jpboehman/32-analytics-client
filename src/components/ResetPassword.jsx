import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router";
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

export const ResetPassword = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
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

  useEffect(() => {
    
    const tokenValidResponse = async (token) => {
      try {
      // Update this with prod URL
        const { data } = await axios.get(`http://localhost:8080/api/auth/reset`, { 
          params: {
          resetPasswordToken: token,
        }
      });
        setUsername(data.username);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    tokenValidResponse(token);
  }, []);

  const onChangePassword = event => {
    setPassword(event.target.value);
  }

  const updatePassword = async (event) => {
    event.preventDefault();
    const {
      match: {
        params: { token },
      },
    } = this.props;
    try {
      // Will need another route for this
      const response = await axios.put(
          `http://localhost:8080/api/auth/reset-password-via-email`,
          { username, resetPasswordToken: token }
      );
      console.log(response)
    } catch (error) {
      console.log(error);
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
                type='text'
                className='form-control'
                name='email'
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
                    {message && !error && (
                        <div className='alert alert-success' role='alert'>
                        {message}
                    </div>
                    )}
                    {error && (
                        <div className='alert alert-danger' role='alert'>
                        {error}
                    </div>
                    )}
              </div>
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;