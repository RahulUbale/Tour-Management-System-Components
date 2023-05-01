import React, { useState } from 'react';
import PaymentDetails from './PaymentDetails';
import "./PaymentConfirmation.css"

const PaymentConfirmation = ({ successful}) => {
  const [retryClicked, setRetryClicked] = useState(false);

  const handleRetryClick = () => {
    setRetryClicked(true);
  };

  if (retryClicked) {
    return <PaymentDetails />;
  }

  return (
    <div className="payment-confirmation-container">
    {successful ? (
      <div className="success-container">
        <h2 className="success-heading">Thank You!</h2>
        <p className="success-message">Your payment has been successfully processed.</p>
        <p className="success-submessage">Woohoo! You are now officially ready to travel!</p>
        <p className="success-sms-message">An SMS with your booking details has been sent to your phone number.</p>
      </div>
    ) : (
      <div className="failure-container">
        <h2 className="failure-heading">Uh-Oh!</h2>
        <p className="failure-message">There was an issue processing your payment.</p>
        <p className="failure-submessage">Please ensure your payment details are correct and try again.</p>
        <button className="retry-btn" onClick={handleRetryClick}>
          Retry Payment
        </button>
        <p className="failure-support-message">If the issue persists, please contact our customer support team for assistance.</p>
      </div>
    )}
  </div>
  

  );
};

export default PaymentConfirmation;
