import React, { useContext } from "react";
import { useParams } from "react-router";
import { useAxiosGetPlaces } from "../../hooks/useAxios";
import { AuthContext } from "../../shared/context/AuthContext";
import Card from "../../shared/components/cards/Card";
import Loader from "../../shared/components/loader/Loader";
import NoItem from "../../shared/components/NoItem/NoItem";
import ErrorPage from "../../shared/pages/ErrorPage";

import styles from "./Places.module.css";

export default function Places() {
	const { id } = useParams();
	const authCtx = useContext(AuthContext);

	const { data, error, status } = useAxiosGetPlaces(id);

	if (status === "loading") {
		return <Loader />;
	}
	if (status === "error") {
		return <ErrorPage />;
	}
	if (data && data.data.places.length === 0) {
		return <NoItem context="Places" />;
	}

	return (
		<main className={`${styles.main} row`}>
			{data &&
				data.data.places.map((place) => (
					<Card key={place._id}>
						<div className={styles.place}>
							<div className={styles.place__image}>
								<img src={place.image} alt="" />
							</div>
							<div className={styles.place__detail}>
								<h3>{place.title}</h3>
								<h6>{place.address}</h6>
								<p>{place.description}</p>
							</div>
							<div className={styles.btn}>
								<button className={styles.btn_view}>View on map</button>
								{authCtx.userId === id && (
									<>
										<button className={styles.btn_edit}>edit</button>
										<button className={styles.btn_delete}>delete</button>
									</>
								)}
							</div>
						</div>
					</Card>
				))}
		</main>
	);
}
