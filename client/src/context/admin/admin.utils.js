import axios from 'axios'

export const getUser = (username, password) => {
    return axios.post(`${process.env.ENDPOINT}/auth/login`, {
        username,
        password
    }, {
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res => res)
    .catch(err => {
        console.log(err)
    })
}
