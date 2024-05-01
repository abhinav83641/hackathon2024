import axios from 'axios'
import config from '../config'

export async function register(full_name, email,  password,phone_no) {
    const body = {
        full_name, email,  password,phone_no,
    }

    const response = await axios.post(`${config.url}/users/register`, body)
    return response.data

}

export async function login(email,password) {
    console.log('entry')
    const body = {
        email,password
    }

    const response = await axios.post(`${config.url}/users/login`, body)
    return response.data
   

}


export async function create(title, contents, user_id, category_id ) {
    const body = {
        title, contents, user_id, category_id ,
    }

    const response = await axios.post(`${config.url}/blogs/create`, body)
    return response.data

}

export async function deleted(id) {
    const body = {
        id ,
    }

    const response = await axios.delete(`${config.url}/blogs/delete`,body)
    return response.data

}
