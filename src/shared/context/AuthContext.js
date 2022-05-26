import { createContext, useState } from "react";
import Cookies from 'js-cookie';

export const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  userId: "",
  login: () => {},
  signout: () => {}
})

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState("")
  const [userId, setUserId] = useState("")

  const loginHandler = (token, id) => {
    setIsLoggedIn(true)
    setToken(token)
    setUserId(id)
  }

  const signoutHandler = () => {
    setIsLoggedIn(false)
    setToken("")
    setUserId("")
    Cookies.remove("fleckonUser")
  }

  const ctx = {
    isLoggedIn,
    token,
    userId,
    login: loginHandler,
    signout: signoutHandler
  }

  return <AuthContext.Provider value={ctx}>
    {children}
  </AuthContext.Provider>
}