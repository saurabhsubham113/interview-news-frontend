import axios from "axios";
//creating an instance of axios
export class AxiosHandler {
    static _axios = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })

    static async get(url) {
        try {
            const res = await AxiosHandler._axios.get(url)
            if (res) {
                return res.data
            }
        } catch (error) {
            this.handleErrors(error)
            Promise.reject(error)
        }
    }

    static handleErrors(error) {
        if (error.response) {
            const errorMessage = error.response.data.message
            return errorMessage ? errorMessage : 'Something went wrong'
        }

        return 'something not working'
    }
}