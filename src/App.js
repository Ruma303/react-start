import React from "react";
import MyComponent from "./MyComponent";

// % Sintassi senza JSX (solo React.createElement())
/* function App() {
  const title = React.createElement(
    "h1", // Type
    null, // Props
    "Hello World" // Children
  );
  return React.createElement(
    "div", { className: "App" }, title
    );
}
export default App; */

// % Componente App con JSX e React.createElement()
/* function App() {
    const title = React.createElement(
        "h1", // Type
        null, // Props
        "Hello World" // Children
    );
    return (
        <div className="App">
            {title}
        </div>
    );
}
export default App; */

// % Componente App con JSX (sugar syntax)
/* function App() {
    const title = <h1>Hello World</h1>;
    return (
        <div className="App">
            {title}
        </div>
    );
}
export default App;
 */

// % Render MyComponent
function App() {
    return (
        <div className="App">
            <MyComponent />
        </div>
    )
}
export default App;

