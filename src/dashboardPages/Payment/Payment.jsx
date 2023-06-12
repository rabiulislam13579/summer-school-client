import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckoutForm';
import UseClass from '../../hooks/UseClass';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [ enrolls ] = UseClass();
    const total = enrolls.reduce((sum, item) => Number(item.price) + Number(sum), 0)
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <h2 className='my-5 text-3xl text-green-600'>Please Complete Your Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm enrolls={enrolls} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;