import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const incrementCount2 = () => {
        setCount2(count2 + 2);
    };

    return (
        <div className="user-card">
            <div className="user-info">
                <h1>Function Component</h1>
                <h2>Name: {props.name}</h2>
                <h3>Location: {props.location}</h3>
                <h3>Contact: {props.contact}</h3>
                <h5 onClick={incrementCount} style={{ cursor: "pointer" }}>
                    Count: {count} (Click me!)
                </h5>
                <h5 onClick={incrementCount2} style={{ cursor: "pointer" }}>
                    Count2: {count2} (Click me!)
                </h5>
            </div>
        </div>
    );
};

export default User;
