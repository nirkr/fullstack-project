import axios from 'axios';

const URL='/api/auth';

const login = async (userName:string, password: string) => {
    await axios.post(`${URL}/signin`, {userName, password})
}

const register = async (userName:string, password: string) => {
    try {
      return await axios.post(`${URL}/signup`, {userName, password})
    }
    catch(e:any){
      throw new Error(e);
    }  
  };

export {login, register}