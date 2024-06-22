// Source: 

// const heading = React.createElement("h1", { id: "heading" }, "Radhe Radhe"); //React element creation using React.createElement method
// const root = ReactDOM.createRoot(document.getElementById("root")); //React root creation using ReactDOM.createRoot method
// root.render(heading); //Rendering the React element to the React root

/*
 * <div id="parent">
 *     <div id="child">
 *         <h1>"i am h1 tag"</h1>
 *     </div>
 * </div>
 */

// Now we will create the above structure using React.createElement method
//Nested React elements creation using 
const parent = React.createElement(
  "div",  //type of element
  { id: "parent" }, //props of element
  React.createElement( "div",  { id: "child" },[
    React.createElement("h1", {id:"h1"}, "I am h1 tag"),  // array of child elements 
    React.createElement("p", {id:"p"}, "I am p tag")
    ])
);

console.log(parent); // This is an object
const root = ReactDOM.createRoot(document.getElementById("root")); //React root creation using ReactDOM.createRoot method
root.render(parent); //Rendering the React element to the React root
