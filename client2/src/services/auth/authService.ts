import axios from 'axios';

const URL='localhost:4000/api/auth';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

const login = async (userName:string, password: string) => {
    await axios.post(`${URL}/signin`, {userName, password})
}

const register = async (userName:string, password: string) => {
    await axios.post(`${URL}/signup`, {userName, password}, {
        headers: headers
      })
    };

export {login, register}