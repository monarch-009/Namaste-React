import React from "react";

class UserCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        };
    }

    render() {
        const { name, location, contact } = this.props;
        const { count, count2 } = this.state;
        return (
            <div className="user-card">
                <h1>Class Component</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: {contact}</h3>
                <h5>Count: {count}</h5>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Click Me</button>
                <h5>Count2: {count2}</h5>
                <button onClick={() => {
                    this.setState({
                        count2: this.state.count2 + 2
                    })
                }}>Click Me</button>
            </div>
        );
    }
}

export default UserCard;
