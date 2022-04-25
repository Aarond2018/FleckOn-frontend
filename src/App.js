import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./shared/components/header/Header";

import "./App.css";
import "./util.css";
import Loader from "./shared/components/loader/Loader";
import Login from "./users/pages/Login";

const Users = React.lazy(() => import("./users/pages/Users"));

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
				</Routes>
			</div>
	);
}

export default App;
