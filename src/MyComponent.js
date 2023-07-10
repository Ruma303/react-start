import React from "react";

const MyComponent = () => {
    return <>
        <>Ciao da MyComponent</>
    </>
};

export default MyComponent;


//% Regole Sintattiche JSX

//$ Tag HTML
{/* <br></br> */}
{/* <br /> */}


{/* Questo è un commento in JSX */}


//$ Attributi
/* const element = (
<label htmlFor="example">
    <input type="checkbox" defaultChecked /> Esempio
</label>
);
return element; */


//$ Espressioni JavaScript
/* const name = "Mario";
const element = <h1>Ciao, {name}!</h1>;
return element; */



//$ Stile inline
/* const style = {
    color: "red",
    fontSize: "24px", // font-size
  };
const element = <p style={style}>
Style da oggetti esterni</p>;

const element2 = (
<p style={{
    background: "blue",
    fontWeight: "1.2rem",
    color: "white",
    }}>Style da oggetti interni</p>
);
return element, element2; */

//$ Chiavi di iterazioni
  /*const items = ['apple', 'banana', 'cherry'];
return (
   <ul>
      {items.map((item, index) => (
         <li key={index}>{item}</li>
      ))}
   </ul>
); */

//$ Eventi
/* const handleClick = () => {
   console.log('Button clicked');
};
   return (
   <button onClick={handleClick}>Click me</button>
); */


//% Regole JSX per il return
  /* <div>
   <h1>Hello World</h1>
</div> */


//$ React Fragment
/* return (
   <React.Fragment>
      <h1>Hello World</h1>
   </React.Fragment>
); */

