import React from 'react';
import pizzas from '../data/pizzas.json'
import PizzaItem from './Pizza';
import AppCSS from './App.module.css';

import Cart from './Cart';
import AppStateProvider from './AppState';
import SpecialOffer from './SpecialOffer';

import PizzaSVG from '../svg/pizza.svg';

const App = () => {
    const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
    return (
        <AppStateProvider>
            <div className={AppCSS.container}>
                <div className={AppCSS.header}>
                    <PizzaSVG width={120} height={210} />
                    <div className={AppCSS.siteTitle}>Delicious Pizza</div>
                    <Cart />
                </div>
                {specialOfferPizza &&< SpecialOffer pizza={specialOfferPizza} />}
                <ul className={AppCSS.pizzaList}>
                    {pizzas.map(pizza => {
                        return <PizzaItem key={pizza.id} pizza={pizza} />
                    })}
                </ul>
            </div>
        </AppStateProvider>
    )
}

export default App;