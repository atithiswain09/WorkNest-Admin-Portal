import { useState,useEffect } from 'react';
import { getLocalStorage } from '../utils/localStorage';
import AuthContext from './AuthContext'

function AuthProvider({ children }) {
    const [userData, setuserData] = useState(null);
    //we are use the Local Stores /Separet the Data use DeStructuring 
    useEffect(()=>{
      const{employees,admin}=getLocalStorage();
      setuserData({employees,admin})
      
    },[])
  return (
     <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider