import React from 'react';
import ImageCard from '../media/katie-zaferes.png'
import StarImage from '../media/star.png'

const Card = () => {
    return (
        <div className='card'>
            <img className='card-image' src={ImageCard} alt='test'/>
            <div className='card-stats'>
                <img className='card-star' src={StarImage} alt='star'/>
                <span>5.0</span>
                <span className='grey'>(6) . </span>
                <span className='grey'>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <strong>From $136 / person</strong>
        </div>
    );
};

export default Card;