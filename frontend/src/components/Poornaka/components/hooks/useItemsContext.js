import { useContext } from "react";
import { ItemsContext } from "../context/ItemContext";

export const useItemsContext = () => {
    const context = useContext(ItemsContext);

    if (!context) {
        throw new Error('useItemsContext must be used inside a ItemContextProvider');
    }

    return context;
};
