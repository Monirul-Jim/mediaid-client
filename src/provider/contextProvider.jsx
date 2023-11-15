'use client'
import { createContext, useState } from "react"

// create toggle context
export const ToggleContext = createContext({
    //    darkMode: false,
    openCart: false,
    openSearchList: false,
    openLogin: false,
    sidebarCollapse: false,
    mobileSidebar: false
})

// create context provider
export const ContextProvider = ({ children }) => {
    const [data, setData] = useState({
        //    darkMode: false,
        openCart: false,
        openSearchList: false,
        openLogin: false,
        sidebarCollapse: false,
        mobileSidebar: false
    })
    return (
        <ToggleContext.Provider value={{ data, setData }}>
            {children}
        </ToggleContext.Provider>
    )
}

