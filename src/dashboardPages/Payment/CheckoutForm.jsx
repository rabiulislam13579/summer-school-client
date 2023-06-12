import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';

const CheckOutForm = ({enrolls,price}) => {
    const {user} = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure]= UseAxiosSecure()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing,setProcessing] = useState(false)
    const [transactionId,setTransactionId]= useState('')


    useEffect(()=>{
        if(price>0){
          axiosSecure.post('/create-payment-intent', {price})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
        }
    },[price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          }); 
          
          if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
          }

          setProcessing(true)

          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'anonymous',
                  email: user?.email || 'unknown'
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError);
          }
          console.log('payment intent', paymentIntent);
          setProcessing(false)
          if(paymentIntent.status ==="succeeded"){
            setTransactionId(paymentIntent.id)
            const payment = {email: user?.email,
               transactionId:paymentIntent.id,
               price,
               date: new Date(),
               courseItems: enrolls.map(item=>item._id),
              enrollItems: enrolls.map(item=>item.enrollId),
               status:'service-pending',
              quantity: enrolls.length
              }
              axiosSecure.post('/payments', payment)
              .then(res=>{
                console.log(res.data);
                if(res.data.result.insertedId){
                  alert('Payment Successful')
                }
              })
            // const transactionId = paymentIntent.id
          }

          }

    return (
        <>
        <p>{price}</p>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-warning btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
        {cardError && <p className='text-red-600'>{cardError}</p>}
        {transactionId && <p className='text-green-600'>Transaction complete with Transaction id :{transactionId}</p> }
        </>
    );
};

export default CheckOutForm;