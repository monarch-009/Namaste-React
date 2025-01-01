import React, { use, useReducer } from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const errorPageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        fontFamily: 'Arial, sans-serif',
        flexDirection: 'column',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: '48px',
        marginBottom: '20px',
        fontWeight: 'bold',
    };

    const paragraphStyle = {
        fontSize: '18px',
        marginBottom: '40px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#f5c6cb',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        color: '#721c24',
    };

    const err = useRouteError();
    console.log(err);
    return (

        <div style={errorPageStyle}>
            <h1 style={headingStyle}>{err.status}{err.statusText}</h1>
            <p style={paragraphStyle}>Sorry, the page you are looking for doesn't exist.</p>
            <button style={buttonStyle} onClick={() => window.location.href = '/'}>Go Back Home</button>
        </div>
    );
};

export default Error;
