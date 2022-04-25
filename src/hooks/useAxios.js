import { useQuery } from 'react-query'
import axios from 'axios'

const getUsers = () => axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`).then(res => res.data)

export const useAxios = () => {
  return useQuery("users", getUsers)
}