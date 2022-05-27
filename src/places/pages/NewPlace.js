import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


import { useAxiosAddPlace } from "../../hooks/useAxios";

import styles from "../../users/pages/Auth.module.css"


export default function NewPlace() {
  const [imageFile, setImageFile] = useState(null)

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: "onChange" });

  const { mutate, status: reqStatus, error: reqError } = useAxiosAddPlace()

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
  if (reqStatus === "loading") buttonText = "Adding Place"
  if (reqStatus === "success") buttonText = "Place added"


	return (
		<main className={styles.main}>
			<div className={styles.form}>
				<form onSubmit={handleSubmit(handleFormSubmit)}>
					<h2>Add a new place</h2>
					<div className={styles.form__group}>
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id="title"
							required
							{...register("title")}
						/>
					</div>
					<div className={styles.form__group}>
						<label htmlFor="description">Description</label>
						<textarea
							type="text"
							id="description"
              rows="4"
							required
							{...register("description")}
						/>
					</div>
					<div className={styles.form__group}>
						<label htmlFor="address">Address</label>
						<input
							type="text"
							id="address"
							required
							{...register("address")}
						/>
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

					<button type="submit" className={styles.button}>{buttonText || "Add Place"}</button>
          <p className="error-text">{reqStatus === "error" && ( reqError?.response?.data?.message ||"An error occured")}</p>
				</form>
			</div>
		</main>
	);
}
