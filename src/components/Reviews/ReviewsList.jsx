import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/api'; 

const ReviewsList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <div>
          <h2>Reviews</h2>
          <ul>
            {reviews.map(({ id, profile_path, original_name, name }) => (
              <Review
                key={id}
                id={id}
                profilePath={profile_path}
                originalName={original_name}
                name={name}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div>We don't have any review for this movie.</div>
      )}
    </>
  );
};


const Review = ({ id, profilePath, originalName, name }) => (
  <li key={id}>
    <img src={profilePath} alt={originalName} />
    <h3>{name}</h3>
    <p>{originalName}</p>
  </li>
);

export default ReviewsList;

