import axios from 'axios';
import {Mission} from '../../types/types'

const URL='/api/missions';
const token = localStorage.getItem('token') || '';
const config = {
    headers: {
       Authorization: token 
    }
};

const getMissions = async () => {
    try{
        const res = await axios.get(`${URL}`, config)
        return {
            data: res.data,
            status: 'success',
            error: null,
        }
    }
    catch(e){
        return{
            data: null,
            status: 'failed',
            error: e,
        }
    }
}
const createMissions = async (newMission:Mission) => {
    return await axios.post(`${URL}`, newMission)
}
const updateMissions = async (missionId: string) => {
    return await axios.post(`${URL}/:${missionId}`)
}
const deleteMissions = async (missionId: string) => {
    return await axios.post(`${URL}/:${missionId}`)
}

export {getMissions, createMissions, updateMissions, deleteMissions};