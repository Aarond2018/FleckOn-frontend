import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import styles from "./header.module.css";

export default function Header() {
	const authCtx = useContext(AuthContext)

	const handleSignOut = e => {
		authCtx.signout()
	}

	return (
		<header className={styles.header}>
			<div className={`flex row ${styles.header__main}`}>
				<Link to="/">
					<h1>FleckOn</h1>
				</Link>
				<ul>
					<li>
						<Link to="/">Users</Link>
					</li>
					{!authCtx.isLoggedIn && (
						<li>
						<Link to="/login">Log in / Sign up</Link>
					</li>
					)}
					{authCtx.isLoggedIn && (<li>
						<Link to="" onClick={handleSignOut}>Sign out</Link>
					</li>)}
					{authCtx.isLoggedIn && (
						<li>
							<Link to="">New Place</Link>
					</li>
					)}
				</ul>
			</div>
		</header>
	);
}
