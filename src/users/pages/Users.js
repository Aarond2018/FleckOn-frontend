import React from "react";
import UsersList from "../components/UsersList";

import { useAxios } from "../../hooks/useAxios";
import Loader from "../../shared/components/loader/Loader";
import NoItem from "../../shared/components/NoItem/NoItem";
import ErrorPage from "../../shared/pages/ErrorPage";

export default function Users() {
	const { data, status, error } = useAxios();

	if (status === "loading") {
		return <Loader />;
	}

	if (status === "error") {
		return <ErrorPage />;
	}

	if (data && data.data.length === 0) {
		return <NoItem context="User" />;
	}

	return <main>{data && <UsersList users={data.data} />}</main>;
}
