import React from 'react';
import TravelSearch from './Components/TravelSearch';
import PaymentDetails from './Components/PaymentDetails';
import PaymentConfirmation from './Components/PaymentConfirmation';
import Booking from './Components/Booking';
import ReviewsAndRatings from './Components/ReviewsAndRatings';
import { flights } from './dummy-flights-data.sql';
//import Review from './Components/Review';
//<Booking/>< PaymentConfirmation  successful = {false } />
import BookingsPage from './Components/BookingsPage';
import CurrencyConversion from './Components/CurrencyConverter';



function App() {
  return (
    <div className="App">
     <ReviewsAndRatings/>
        </div>
  );
}


export default App;

