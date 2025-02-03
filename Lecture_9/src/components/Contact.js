import React from 'react';
import styled from 'styled-components';

// Styled components for styling
const ContactContainer = styled.div`
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    padding: 40px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 40px auto;

    @media (max-width: 600px) {
        padding: 20px;
    }
`;

const ContactHeader = styled.div`
    h1 {
        font-size: 2.5rem;
        color: #2c3e50;
        margin-bottom: 20px;

        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }
`;

const ContactContent = styled.div`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #34495e;

    p {
        margin-bottom: 20px;
        font-size: 1.2rem;
    }

    .email {
        font-weight: bold;
        color: #2980b9;
        font-size: 1.3rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

const Contact = () => {
    return (
        <ContactContainer>
            <ContactHeader>
                <h1>Contact Me</h1>
            </ContactHeader>
            <ContactContent>
                <p>If you'd like to reach out, feel free to contact me via email:</p>
                <p className="email">Email: adityasingh@gmail.com</p>
            </ContactContent>
        </ContactContainer>
    );
};

export default Contact;
