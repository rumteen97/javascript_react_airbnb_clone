import React from 'react';
import gridImage from '../media/photo-grid.png'

const Up = () => {
    return (
        <div className="head-container">
            <img className='gridImage' src={gridImage} alt='grid'/>
            <h1 className='head-title'>Online Experiences</h1>
            <p className='head-text'>Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
};

export default Up;