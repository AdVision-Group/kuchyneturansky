import React, { createContext, useState, useEffect } from 'react'

import { getUser } from './admin.utils'

export const AdminContext = createContext({
    currentUser: null,
    isLoading: false,
    logIn: () => { },
    logOut: () => { },
})

const AdminProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const logIn = async (username, password) => {
        setIsLoading(true)
        const response = await getUser(username, password)
        if (response.status === 200) {
            setCurrentUser(response.data.accessToken)
            localStorage.setItem(process.env.ADMIN_TOKEN, response.data.accessToken)
        }
        setIsLoading(false)
    }


    const logOut = () => {
        localStorage.removeItem(process.env.ADMIN_TOKEN)
        setCurrentUser(null)
    }

    useEffect(() => {
        if (localStorage.getItem(process.env.ADMIN_TOKEN)) {
            setCurrentUser(localStorage.getItem(process.env.ADMIN_TOKEN))
        }
    }, [])

    return (
        <AdminContext.Provider
            value={{
                currentUser,
                isLoading,
                logIn,
                logOut
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}

export default AdminProvider