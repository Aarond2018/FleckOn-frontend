import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


import { useAxiosSignup } from "../../hooks/useAxios";

import styles from "./Auth.module.css";

export default function Login() {
  const [imageFile, setImageFile] = useState(null)

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: "onChange" });

  const { mutate, status: reqStatus, error: reqError } = useAxiosSignup()

	const handleFormSubmit = (data) => {
    const formValues = {...data, image: imageFile}

    const formData = new FormData()

    for(const key in formValues) {
      formData.append(key, formValues[key])
    }

    mutate(formData)

	};

  const handleFileSelect = event => {
    setImageFile(event.target.files[0])
  }

  const preventDefault = event => {
    event.preventDefault()
  }
  
  let buttonText;
  if (reqStatus === "loading") buttonText = "Signing up..."
  if (reqStatus === "success") buttonText = "Done"


	return (
		<main className={styles.main}>
			<div className={styles.form}>
				<form onSubmit={handleSubmit(handleFormSubmit)}>
					<h2>Sign up</h2>
					<div className={styles.form__group}>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							required
							{...register("name")}
						/>
					</div>
					<div className={styles.form__group}>
						<label htmlFor="email">E-mail</label>
						<input
							type="email"
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

          <div className={`${styles.form__group} ${styles.file}`}>
            <label htmlFor="file"><button onClick={preventDefault}>Select file</button></label>
            <input type="file" id="file" onChange={handleFileSelect} required />
          </div>
          {imageFile && (
            <div className={styles.image__preview}>
            	<img src={`${URL.createObjectURL(imageFile)}`} alt="user"/>
          	</div>
          )}

					<button type="submit" className={styles.button}>{buttonText || "Sign up"}</button>
          <p className="error-text">{reqStatus === "error" && ( reqError?.response?.data?.message ||"An error occured")}</p>
					<p>
						Do you have an account?{" "}
						<span>
							<Link to="/login">Log in</Link>
						</span>
					</p>
				</form>
			</div>
		</main>
	);
}
