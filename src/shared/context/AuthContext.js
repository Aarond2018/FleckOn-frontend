import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  login: () => {},
  logout: () => {}
})

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(false)

  const loginHandler = (obj) => {
    setIsLoggedIn(true)
    setToken(obj.token)
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
    setToken("")
  }

  const ctx = {
    isLoggedIn,
    token,
    login: loginHandler,
    logout: logoutHandler
  }

  return <AuthContext.Provider value={ctx}>
    {children}
  </AuthContext.Provider>
}