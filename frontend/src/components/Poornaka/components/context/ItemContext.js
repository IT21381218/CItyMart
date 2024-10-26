
import React, { createContext, useReducer } from "react";

export const ItemsContext = createContext();

export const itemReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {
                items: action.payload
            };
        case 'CREATE_ITEM':
            return {
                items: [action.payload, ...state.items]
            };
        default:
            return state;
    }
};

export const ItemContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(itemReducer, {
        items: null
    });

    return (
        <ItemsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ItemsContext.Provider>
    );
};