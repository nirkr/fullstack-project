import axios from 'axios';
import {Mission} from '../../types/types'

const URL='localhost:4001/api/mission';

const getMissions = async () => {
    return await axios.post(`${URL}`)
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