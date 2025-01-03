import React from 'react';
import styled from 'styled-components';
import User from './User';
import UserClass from './UserClass';

// Styled components for styling
const AboutContainer = styled.div`
    font-family: 'Arial', sans-serif;
    background-color: #f4f7fb;
    margin: 0;
    padding: 30px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 40px auto;

    @media (max-width: 600px) {
        padding: 20px;
    }
`;

const AboutHeader = styled.div`
    h1 {
        font-size: 2.5rem;
        color: #2c3e50;
        margin-bottom: 20px;

        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }
`;

const AboutContent = styled.div`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #34495e;
    text-align: left;

    p {
        margin-bottom: 20px;
    }

    ul {
        list-style-type: square;
        margin-left: 20px;
        padding-left: 20px;
    }

    ul li {
        font-size: 1.1rem;
        margin-bottom: 10px;
    }

    .course-name {
        font-weight: bold;
        color: #2980b9;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <AboutHeader>
                <h1>About Us</h1>
            </AboutHeader>
            <AboutContent>
                <p>
                    Welcome to the <strong>Learning React Routing</strong> lecture, part of the
                    <span className="course-name"> Namaste React Course</span>.
                </p>
                <p>
                    This course is designed to help you master React Routing, an essential skill for building single-page
                    applications with React. React Router allows you to create dynamic and responsive web pages by linking
                    different components to specific routes.
                </p>
                <p>
                    Whether you're building a small app or a large-scale project, understanding routing in React is crucial
                    for seamless navigation between different pages and maintaining the state of your application.
                </p>
                <p>
                    By the end of this section, you'll be able to:
                    <ul>
                        <li>Set up routing with React Router.</li>
                        <li>Define different routes for different components.</li>
                        <li>Use link and navigation components effectively.</li>
                        <li>Implement nested routes and redirects.</li>
                    </ul>
                </p>
                <User name="Aditya Singh" location="Patna" contact="adi@gmail.com" />
                <UserClass name="Rohan Singh " location="Odisa" contact="rohan@gmail.com" />
            </AboutContent>
        </AboutContainer>
    );
};

export default About;
