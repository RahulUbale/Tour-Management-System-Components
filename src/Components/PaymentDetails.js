import React, { useState } from 'react';
import './PaymentDetails.css';

const PaymentDetails = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardType, setCardType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCardNumberChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setCardNumber(e.target.value);
    }
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setCvv(e.target.value);
    }
  };

  const handleCardTypeChange = (e) => {
    setCardType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      cardNumber,
      cardType,
      expiryDate,
      cvv,
      fullName: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
    };
  
    console.log('Form data:', formData);
  
    // handle payment submission
  };
  

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

return (
<div className="payment-form">
  <h2>Payment Details</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-field">
      <label htmlFor="cardNumber">Card Number:</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={handleCardNumberChange}
        maxLength={16}
        required
      />
    </div>
    <div className="form-field-inline">
      <div className="form-field">
        <label htmlFor="cardType">Card Type:</label>
        <div className="card-type">
          <label htmlFor="credit">
            <input
              type="radio"
              id="credit"
              name="cardType"
              value="credit"
              checked={cardType === 'credit'}
              onChange={handleCardTypeChange}
            />
            Credit
          </label>
          <label htmlFor="debit">
            <input
              type="radio"
              id="debit"
              name="cardType"
              value="debit"
              checked={cardType === 'debit'}
              onChange={handleCardTypeChange}
            />
            Debit
          </label>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={handleCvvChange}
          maxLength={3}
          pattern="^[0-9]{3,4}$"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          maxLength={5}
          pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"
          required
        />
      </div>
    </div>
    <div className="form-field-inline">
      <div className="form-field">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
      </div>
    </div>
    <button type="submit" className="submit-btn"> Pay</button>
  </form>
</div>


);
};

export default PaymentDetails;