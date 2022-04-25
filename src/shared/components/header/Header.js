import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

export default function Header() {
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
					<li>
						<Link to="/login">Log in / Sign up</Link>
					</li>
					<li>
						<Link to="">Sign out</Link>
					</li>
					<li>
						<Link to="">New Place</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
