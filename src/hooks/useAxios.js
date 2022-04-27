import { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../shared/context/AuthContext";
import Cookies from 'js-cookie';


export const useAxios = () => {
	return useQuery("users",  () =>
	axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/users`)
		.then((res) => res.data));
};

export const useAxiosLogin = () => {
	const navigate = useNavigate();
	const authCtx = useContext(AuthContext);

	return useMutation(
		({ email, password }) =>
			axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
				email,
				password,
			}).then(res => res.data),
		{
			onSuccess: (data) => {
				console.log(data);
				authCtx.login(data.data.token);
        Cookies.set("fleckonUser", data.data.token, {
          expires: 1/24
      });
				navigate("/", { replace: true });
			},
			onError: (error, variables, context) => {
        console.log(error.response.data.message)
      },
			retry: false,
		}
	);
};

export const useAxiosSignup = () => {
	const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

	return useMutation(
		(formData) => {
			return axios
				.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, formData)
				.then((res) => res.data);
		},
		{
			onSuccess: (data, variables, context) => {
				console.log(data);
        authCtx.login(data.data.token)
				navigate("/", { replace: true });
			},
			onError: (error, variables, context) => {
				console.log(error);
			},
		}
	);
};
