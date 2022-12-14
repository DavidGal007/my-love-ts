import React from 'react';
type StarProps = {
    index: number
}
const Star: React.FC<StarProps> = () => {

    return (
        <label className="star">
            <input
                type="radio"
                name="rating"
                className="stars_radio-input"
            />
            <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#F4B30C" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
            >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        </label>
    );
}

export default Star;