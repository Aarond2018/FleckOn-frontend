import React, { Suspense, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Cookies from 'js-cookie';

import Header from "./shared/components/header/Header";
import Loader from "./shared/components/loader/Loader";
import { AuthContext } from "./shared/context/AuthContext";

import "./App.css";
import "./util.css";

const Users = React.lazy(() => import("./users/pages/Users"));
const Signup = React.lazy(() => import("./users/pages/Signup"))
const Login = React.lazy(() => import("./users/pages/Login"))

function App() {
  const ctx = useContext(AuthContext)

  useEffect(() => {
    const token = Cookies.get("fleckonUser")
    if(token) ctx.login(token)
  }, [ctx])

	return (
			<div className="App">
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback={<Loader />}>
								<Users />
							</Suspense>
						}
					/>
					<Route
						path="/login"
						element={
							<Suspense fallback={<Loader />}>
								<Login />
							</Suspense>
						}
					/>
					<Route
						path="/signup"
						element={
							<Suspense fallback={<Loader />}>
								<Signup />
							</Suspense>
						}
					/>
				</Routes>
			</div>
	);
}

export default App;
