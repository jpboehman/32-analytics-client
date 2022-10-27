import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FillOutOurSubscribeForm } from './subscribe/Subscribe';

const PUBLIC_KEY =
	'pk_live_51JaUD3GNQwOLqf8vLR0Q4G3Wsq95Y0TBXrkcoMKtrTTPhhJNRCSVaxyBhyiGGa4ERqM05RFkmTN9y0AfX39k5H8j00TncYXAOC';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export const StripeContainer = () => {
	return (
		<Elements stripe={stripeTestPromise}>
			<FillOutOurSubscribeForm />
		</Elements>
	);
};

export default StripeContainer;
