import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        {id: '1', text: 'Flowers', amount: -500 },
        {id: '2', text: 'Salary', amount: 100000 },
        {id: '3', text: 'Book', amount: -3000 },
        {id: '4', text: 'Laptop', amount: 120000 },
    ]
}

// create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(<GlobalContext.Provider value={{transactions:state.transactions}}>
        {children}
    </GlobalContext.Provider>)
}