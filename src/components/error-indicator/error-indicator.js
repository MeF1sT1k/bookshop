import React from 'react';
import "./error-indicator.css";

const ErrorIndicator = () => {
    return (
        <div className='alert alert-warning' role='alert'>
            <img src="./img/alert.png" alt="megaphone" />
            <span>Something terrible happened...</span>
            <small className='text-secondary'>...but we'll fix it soon</small>
        </div>
    )
}

export default ErrorIndicator;