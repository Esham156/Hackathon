import React, { useState, useContext, createContext } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [searchArray, setSearchArray] = useState([]);

  return (
    <AuthContext.Provider value={{ user, setUser, searchArray, setSearchArray }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)
