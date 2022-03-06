import axios from "axios"
import {URL} from '../config/constants';

interface valueObject {
    a: {b: {c: string}}
}
interface Mission {
    key: string,
    value: valueObject,
}

const createMission = async (newMission: Mission) => {
    return await axios.post(URL, newMission)
}
const getMissions = async () => {
    console.log({URL});
    try{
        const missions = await axios.get(URL);
        return missions;
    }    
    catch(e){ console.log(e);
    }    
}
const updateMission = async (missionId: string, dataToUpdate:Mission) => {
    return await axios.put(`${URL}/:${missionId}`, dataToUpdate)
}
const deleteMission = async (missionId: string) => {
    return await axios.delete(`${URL}/:${missionId}`)
}

export {getMissions, createMission, updateMission, deleteMission}