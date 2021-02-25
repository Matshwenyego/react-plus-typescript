import React from 'react';
import pizzas from '../data/pizzas.json'
import Pizza from './Pizza';
import AppCSS from './App.module.css';

import Cart from './Cart';
import AppStateProvider from './AppState';

import PizzaSVG from '../svg/pizza.svg';

const App = () => {
    return (
        <AppStateProvider>
            <div className={AppCSS.container}>
                <div className={AppCSS.header}>
                    <PizzaSVG width={120} height={210} />
                    <div className={AppCSS.siteTitle}>Delicious Pizza</div>
                    <Cart />
                </div>
                <ul>
                    {pizzas.map(pizza => {
                        return <Pizza key={pizza.id} pizza={pizza} />
                    })}
                </ul>
            </div>
        </AppStateProvider>
    )
}

export default App;