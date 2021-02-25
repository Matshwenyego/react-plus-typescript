import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import {AppStateContext} from './AppState';
import CartCSS from './Cart.module.css';  

interface Props {

}

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    }

    render() {
        const {isOpen} = this.state;
        return (
            <AppStateContext.Consumer>{(state) => {
                const itemsCount = state.cart.items.reduce((sum, item) => {
                    return sum + item.quantity;
                }, 0);
                return (
                    <div className={CartCSS.cartContainer}>
                        <button 
                            className={CartCSS.button} 
                            type="button"
                            onClick={this.handleClick}
                        >
                            <FiShoppingCart/>
                            <span>{itemsCount} pizza(s)</span>
                        </button>
                        <div className={CartCSS.cartDropDown} style={{
                            display: isOpen ? 'block' : 'none',
                        }}>
                            <ul>
                                {state.cart.items.map((item) => {
                                    return <li key={item.id}>{item.name} &times; {item.quantity}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                )
            }}</AppStateContext.Consumer>
        )
    }
}

export default Cart;