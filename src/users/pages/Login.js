import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


import { useAxiosLogin } from "../../hooks/useAxios";

import styles from "./Auth.module.css";

export default function Login() {

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: "onChange" });

  const { mutate, error: reqError, status: reqStatus } = useAxiosLogin()

	const handleFormSubmit = (data) => {
    mutate(data)
	};

  let buttonText;
  if (reqStatus === "loading") buttonText = "Logging in..."
  if (reqStatus === "success") buttonText = "Logged in"

	return (
		<main className={styles.main}>
			<div className={styles.form}>
				<form onSubmit={handleSubmit(handleFormSubmit)}>
					<h2>Login</h2>
					<div className={styles.form__group}>
						<label htmlFor="email">E-mail</label>
						<input
							type="text"
							id="email"
							required
							{...register("email", {
								pattern: {
									value:
										/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
									message: "Invalid email address",
								},
							})}
						/>
						{errors.email && <p>{errors.email.message}</p>}
					</div>
					<div className={styles.form__group}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							required
							{...register("password", {
								minLength: {
									value: 6,
									message: "Password must be greater than 6 characters",
								},
							})}
						/>
						{errors.password && <p>{errors.password.message}</p>}
					</div>
					<button type="submit" className={styles.button}>{buttonText || "Log in"}</button>
          <p className="error-text">{reqStatus === "error" && (reqError.response.data.message || "An error occured")}</p>
					<p>
						Don't have an account?{" "}
						<span>
							<Link to="/signup">Sign up</Link>
						</span>
					</p>
				</form>
			</div>
		</main>
	);
}
