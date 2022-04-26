import { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../shared/context/AuthContext";

const getUsers = () =>
	axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/users`)
		.then((res) => res.data);

export const useAxios = () => {
	return useQuery("users", getUsers);
};

export const useAxiosLogin = () => {
	const navigate = useNavigate();

	const authCtx = useContext(AuthContext);
	return useMutation(
		({ email, password }) => {
			return fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()) 
      
      /* axios
				.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
					email,
					password,
				})
				.then((res) => res.data) */
        
		},
		{
			onSuccess: (data, variables, context) => {
				console.log(data);
				// authCtx.login(data.data);
				// navigate("/", { replace: true });
			},
			onError: (error, variables, context) => {
        console.log(error)
			},
      /* onSettled: (data, error, variables, context) => {
        console.log(data)
      }, */
		}
	);
};

export const useAxiosSignup = () => {
	const navigate = useNavigate();

	return useMutation(
		(formData) => {
			return axios
				.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, formData)
				.then((res) => res.data);
		},
		{
			onSuccess: (data, variables, context) => {
				console.log(data);
				navigate("/", { replace: true });
			},
			onError: (error, variables, context) => {
				console.log(error);
			},
		}
	);
};
