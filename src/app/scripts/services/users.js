import axios from 'axios'
import { endpoints } from './data.js'

export const getUsers = async (user,password) => {
    try {
        const {data, status} = await axios.get(`${endpoints.urlUsers}?user=${user}&password=${password}`)
        if (status === 200) {
            return data
        }
    } catch (error) {
        console.log(error);
    }
}