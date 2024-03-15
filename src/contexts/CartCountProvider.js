import { createContext, useState } from 'react';

export const cartCountContext = createContext();

const CartCountProvider = (props) => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <cartCountContext.Provider value={[cartCount, setCartCount]}>
            {props.children}
        </cartCountContext.Provider>
    );
}

export default CartCountProvider;