import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// eslint-disable-next-line
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];




function App() {
    return (
        <div>   
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}



function Header() {
    // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

    const style = {};

    // return <h1 style={style}>Aphomer Pizza Co.</h1>
    return (
        <header className='header footer'>
            <h1 style={style}>Fast Aphomer Pizza co.</h1>
        </header>
    );
}


function Menu() {
    const pizzas = pizzaData;

    const numPizzas = pizzas.length;

    return (
        <main className='menu'>           
            <h2>OUR MENU</h2>
            {/* <div> */}
                {numPizzas > 0 ? (
                    <React.Fragment>
                        <p>
                            Authentic Ozolua Cuisine. 6 creative dishes to choose from. All from all our stone over, all organic, all delicious.
                        </p>
                        <ul className='pizzas'>
                            {pizzas.map((pizza) => (
                                <Pizza pizzaObj={pizza} key={pizza.name} />
                            ))}
                        </ul>
                    </React.Fragment>
                ) : (
                    <p>We're still working on our Menu. Please come back Later. </p>
                )}

                {/* <Pizza 
                    name="Pizza Apholambo."
                    ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
                    photoName="pizzas/spinaci.jpg"
                    price={2500}
                    producer="Aphomer"
                />
                <Pizza 
                    name="Rose Pizza."
                    ingredients="Tomato, mozarella, mushrooms, and onion"
                    photoName="pizzas/funghi.jpg"
                    price={2950}
                    producer="Kayrose"
                /> */}
                <h2>AB-GADGET ORDER PIZZA BEFORE IT'S TOO LATE O! !! !!!</h2>
            {/* </div> */}
        </main>
    );
}



function Pizza({ pizzaObj }){
    console.log(pizzaObj);

    // if (pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h1>{pizzaObj.name}</h1>
                <p>{pizzaObj.ingredients}</p>
                <h2>{pizzaObj.producer}</h2>
                <span>{pizzaObj.soldOut ? "SOLDOUT" : pizzaObj.price}</span>
                <h2>V.A.T. {pizzaObj.price / 7.5}</h2>
            </div>
        </li>
    );
}



function Footer(props) {
    console.log(props);
    let hour = new Date().getHours();
    let openHour = 12;
    let closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    // console(isOpen);

    // if(hour >= openHour && hour <= closeHour) alert('We are currently open'); else alert(`Sorry we are closed!, shop opens in ${12-hour} hour(s) time`)

    return (
        <footer className='footer'>
            {isOpen ? (
                    <Order closeHour={closeHour} openHour={openHour} />
                    // <Order open={openHour} close={closeHour} />
                ) : (
                    <p>
                        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                    </p>
                )}
        </footer>
    );

            // {/* {new Date().toLocaleTimeString()}. We are currently Open */}
}



function Order({ closeHour, openHour }) {
    return (
        <div className='order'>    
            <p>
                {/* we are open until {props.close}:00. You can come to shop or order online within {props.open} and {props.close}:00. */}
                we are open from {openHour} to {closeHour}:00. You can come to shop or order online.
            </p>
            <button className='btn'>Order</button>
        </div>
    );         
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);




