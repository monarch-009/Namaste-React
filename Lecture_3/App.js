import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render);
// React element is the object

//React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React ✨"
);
// It can be also writen as
const heading2 = (
  <h1 className="head" tabIndex={"5"}>
    Namaste React ✨
  </h1>
);

// React Functional Component
const HeadingComponent = () => {
  return (
    <div id="container">
      <HeadingComponent2 /> // Component Composition
      <h1 className="heading">Namaste javaScript React Component</h1>
    </div>
  );
};
// Both code are same
const HeadingComponent2 = () => (
  <div>
    {" "} // we can Run any js element or function here
    <h1 className="heading">Namaste javaScript React Component 2 </h1>
  </div>
);

// JSX(transpiled before it reached the JS) - PARCEL - Babel
// const jsxHeading = <h1 className="head"  tabIndex={"5"}>Namaste React using JSX ⚡</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(<HeadingComponent />);
