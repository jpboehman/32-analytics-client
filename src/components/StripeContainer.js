import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FillOutOurSubscribeForm } from './subscribe/Subscribe';

const PUBLIC_KEY = process.env.REACT_APP_STRIPE;
// 'pk_test_51JaUD3GNQwOLqf8vi4zKh9oT6oSRkWvlwlZ9uKNTXAr1Kbz4s87O1901NU1h6tvkyhgSWcCT5BXDLYIzPiNa1NAr00I4LKDEai';

const stripePromise = loadStripe(PUBLIC_KEY);

export const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <FillOutOurSubscribeForm />
    </Elements>
  );
};

export default StripeContainer;
