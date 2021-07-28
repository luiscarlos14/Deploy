import React, { createContext, useState, useContext } from "react";

import api, { TOKEN_KEY, ADMIN, ID } from "../api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  
  const [authenticated, setAuthenticated] = useState(() => {
    const isLogged = localStorage.getItem(TOKEN_KEY);
    return !!isLogged;
  });

  const [admin, setAdmin] = useState(() => {
    const isAdmin = localStorage.getItem(ADMIN);
    return !!isAdmin;
  });

  
  const login = (email, senha) => {
    api
      .post("/login", {
        email: email,
        senha: senha,
      })
      .then(function (response) {

        localStorage.setItem(TOKEN_KEY, response.data.token);
        setAuthenticated(true);
        localStorage.setItem(ID, response.data.id_usuario);
       
        if(response.data.admin === 1){
          setAdmin(true);
          localStorage.setItem(ADMIN, true);
        } 
      })
      .catch(function (error) {
        alert("Email ou Senha Incorretos");
      });
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setAuthenticated(false);
    localStorage.removeItem(ADMIN);
    setAdmin(false);
    localStorage.removeItem(ID);
  };

  return (
    <AuthContext.Provider value={{ authenticated, admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
function UseAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, UseAuth };
