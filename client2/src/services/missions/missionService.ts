import axios from 'axios';
import {Mission} from '../../types/types'

const URL='localhost:4001/api/mission';

const getMissions = async () => {
    await axios.post(`${URL}`)
}
const createMissions = async (newMission:Mission) => {
    await axios.post(`${URL}`, newMission)
}
const updateMissions = async (missionId: string) => {
    await axios.post(`${URL}/:${missionId}`)
}
const deleteMissions = async (missionId: string) => {
    await axios.post(`${URL}/:${missionId}`)
}

export {getMissions, createMissions, updateMissions, deleteMissions};