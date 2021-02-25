import React from 'react';
import {useStateDispatch, CartItem} from './AppState';

export interface AddToCartProps {
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

//HOC
export function withAddToCart<OriginalProps>(
    ChildComponent: React.ComponentType<OriginalProps>
    ) {
    const addToCartHoc = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
        const dispatch = useStateDispatch();
        const handleAddToCartClick: AddToCartProps['addToCart'] = (item) => {
            dispatch({
                type: 'ADD_TO_CART',
                payload: {item}
            });
        };

        return (
            <ChildComponent 
                {...props as OriginalProps} 
                addToCart={handleAddToCartClick} 
            />
        )
    }
    return addToCartHoc;
}

//RenderProps
export const WithAddToCartProps: React.FC<{
    children: (props: AddToCartProps) => JSX.Element;
}> = ({ children }) => {
    const dispatch = useStateDispatch();
    const addToCart: AddToCartProps['addToCart'] = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {item}
        });
    };

    return children({ addToCart });
};

//Custom hook
export const useAddToCart = () => {
    const dispatch = useStateDispatch();
    const addToCart: AddToCartProps['addToCart'] = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {item}
        });
    };
    return addToCart;
};