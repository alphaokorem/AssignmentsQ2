"use client";
import React from "react";
import { useState } from "react";

interface StarRatingProps {
  totalStars?: number;
  onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            className={`text-3xl transition-colors ${
              (hover || rating) >= starValue
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;