import { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../shared/context/AuthContext";
import Cookies from "js-cookie";

export const useAxios = () => {
	return useQuery("users", async () => {
		let data;
		try {
			data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`);
		} catch (error) {
			throw new Error(error);
		}
		return data;
	});
};

export const useAxiosLogin = () => {
	const navigate = useNavigate();
	const authCtx = useContext(AuthContext);

	return useMutation(
		async ({ email, password }) => {
      let response;
      try {
        response = axios
				.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
					email,
					password,
				}).then(res => res.data)
      } catch (error) {
        throw new Error(error)
      }
      return response;
    },
		{
			onSuccess: (data) => {
        const { token } = data.data
				authCtx.login(token);
				Cookies.set("fleckonUser", token, {
					expires: 1 / 24,
				});
				navigate("/", { replace: true });
			},
			onError: (error, variables, context) => {
				console.log(error.response)
			},
			retry: false,
		}
	);
};

export const useAxiosSignup = () => {
	const navigate = useNavigate();
	const authCtx = useContext(AuthContext);

	return useMutation(
		async (formData) => {
      let response;
			try {
        response = axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, formData).then(res => res.data)
      } catch(error) {
        throw new Error(error)
      }
      return response;
		},
		{
			onSuccess: (data, variables, context) => {
        const { token } = data.data
				authCtx.login(token);
        Cookies.set("fleckonUser", token, {
					expires: 1 / 24,
				});
				navigate("/", { replace: true });
			},
			onError: (error, variables, context) => {
				console.log(error);
			},
		}
	);
};

export const useAxiosGetPlaces = id => {
  return useQuery(["places", id], async () => {
    let response;
    try {
      response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/places/user/${id}`).then(res => res.data)
    } catch(error) {
      throw new Error(error)
    }
    return response
  })
}
