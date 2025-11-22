import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // If no localStorage, initialize it
        if (!localStorage.getItem("employees")) {
            setLocalStorage();
        }

        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
