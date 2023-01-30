import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
    isAuth: false,
    setIsAuth: () => {}
});

export const AuthContextProvider = ({ children}) => {
    const [isAuth, setIsAuth ] = useState(false);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    return context;
};