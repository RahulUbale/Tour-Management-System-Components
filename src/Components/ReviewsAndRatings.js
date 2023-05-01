import React, { useState } from 'react';
import RatingStars from 'react-rating-stars-component';
import './ReviewsAndRatings.css';

const ReviewsAndRatings = () => {
  const [ratings, setRatings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const addRating = (newRating) => {
    setRatings([...ratings, newRating]);
    console.log('New Ratings:', ratings);
  };

  const calculateAvgRating = () => {
    if (ratings.length === 0) {
      return 0;
    }

    const totalRating = ratings.reduce((acc, curr) => acc + curr, 0);
    return (totalRating / ratings.length).toFixed(1);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleAddReview = () => {
    setReviews([...reviews, review]);
    setReview('');
    console.log('New Reviews:', reviews);
    
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="reviews-and-ratings-container">
      <div className="ratings-container">
        <div className="average-rating">
          <span>Average Rating: </span>
          <span className="rating-number">{calculateAvgRating()}</span>
        </div>
        <div>
          <h3>Rate this place:</h3>
          <RatingStars
            count={5}
            value={rating}
            onChange={ratingChanged}
            size={24}
            activeColor="#00a5a2"
          />
          <button onClick={() => addRating(rating)}>Submit Rating</button>
        </div>
      </div>
      <div className="reviews-container">
        <h3>Add a review:</h3>
        <textarea
          value={review}
          onChange={handleReviewChange}
          rows={4}
          cols={50}
        />
        <br />
        <button onClick={handleAddReview}>Submit Review</button>
        {reviews.length > 0 && (
          <>
            <h2>Reviews</h2>
            {reviews.map((review, index) => (
              <div key={index}>
                <p>{review}</p>
                <hr />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
