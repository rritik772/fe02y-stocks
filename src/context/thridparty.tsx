import { invoke } from '@tauri-apps/api';
import { createContext, useContext, useState } from 'react';

export const ThirdPartyContext = createContext(undefined);
export const useThirdPartyContext = () => useContext(ThirdPartyContext);

export const ThirdPartyContextProvider = ({ children }: { children: JSX.Element }) => {
    const [ selectedStock, setSelectedStock ] = useState('');

    const getStockData = async (stock: String) => {
        const response = await invoke("get_stock", { text: stock });
        return response
    }

    const search_stock = async (stock: String) => {
        const response = await invoke("search_stock", { text: stock });
        return response;
    }
    
    const value = {
        getStockData,
        search_stock,
        selectedStock,
        setSelectedStock
    }

    return (
        <ThirdPartyContext.Provider value={value}>
            {children}
        </ThirdPartyContext.Provider>
    )
}
