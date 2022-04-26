import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./shared/components/header/Header";

import "./App.css";
import "./util.css";
import Loader from "./shared/components/loader/Loader";

const Users = React.lazy(() => import("./users/pages/Users"));
const Signup = React.lazy(() => import("./users/pages/Signup"))
const Login = React.lazy(() => import("./users/pages/Login"))

function App() {
	
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
