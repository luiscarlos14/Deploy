import React, { createContext, useState, useContext } from "react";

import api, { TOKEN_KEY, ADMIN, ID } from "../api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  
  const [authenticated, setAuthenticated] = useState(() => {
    const isLogged = sessionStorage.getItem(TOKEN_KEY);
    return !!isLogged;
  });

  const [admin, setAdmin] = useState(() => {
    const isAdmin = sessionStorage.getItem(ADMIN);
    return !!isAdmin;
  });



  const login = (email, senha) => {
    api
      .post("/login", {
        email: email,
        senha: senha,
      })
      .then(function (response) {

        sessionStorage.setItem(TOKEN_KEY, response.data.token);
        setAuthenticated(true);

        sessionStorage.setItem(ID, response.data.id_usuario);

        if(response.data.admin === 1){
          setAdmin(true);
          sessionStorage.setItem(ADMIN, true);
        } 
      })
      .catch(function (error) {
        alert("Email ou Senha Incorretos");
      });
  };

  const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setAuthenticated(false);
    sessionStorage.removeItem(ADMIN);
    setAdmin(false);
    sessionStorage.removeItem(ID);
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
