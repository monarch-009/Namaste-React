import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
    return (
        <div className='about'>
            <div>
                <h1>
                    About Us
                </h1>
            </div>
            <div>
                <p>
                    Welcome to the <strong>Learning React Routing</strong> lecture, part of the
                    <span> Namaste React Course</span>.
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
                <UserClass name="Rohan Singh" location="Odisa" contact="rohan@gmail.com" />
            </div>
        </div>
    );
};

export default About;
