import { createContext, useState } from "react";
import Cookies from 'js-cookie';

export const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  login: () => {},
  signout: () => {}
})

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(false)

  const loginHandler = (token) => {
    setIsLoggedIn(true)
    setToken(token)
  }

  const signoutHandler = () => {
    setIsLoggedIn(false)
    setToken("")
    Cookies.remove("fleckonUser")
  }

  const ctx = {
    isLoggedIn,
    token,
    login: loginHandler,
    signout: signoutHandler
  }

  return <AuthContext.Provider value={ctx}>
    {children}
  </AuthContext.Provider>
}