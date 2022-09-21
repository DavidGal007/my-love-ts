import React from 'react'
import Star from './Star'

type StarRatingProps = {
    totalStars: number;
    slectedStars: number;
    reviewsCount: number;
}
const createArray = (length: number) => [...Array(length)]

export const StarRating = ({totalStars, slectedStars, reviewsCount}: StarRatingProps) => {
  //onSelect={() => setSlectedStars(i + 1)}
  return (
    <>
    <div className="stars">
      <div className="stars_items">
    {
      createArray(totalStars).map((n, i) => <Star key={i} selected={slectedStars > i}/>)
    }
    </div>
    <p className="stars_count">{reviewsCount}{' '}reviws</p>
    </div>
    </>
  );
}

export default StarRating
