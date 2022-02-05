import React, { useEffect, useState } from 'react';
import { getMissions } from '../services/missions/missionService'
import { Mission } from '../types/types';

export const Index = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const wrapperFunction = async () => {
      const missions = await fetchMissions()
      console.log(missions);
    }
    wrapperFunction()
  }, [])
  // todo: get jwtToken from session storage
  const getTokenFromSession = () => {
    return sessionStorage.getItem('token') || '';
  }

  const fetchMissions = async () => await getMissions();


  return (
    <div>
      {getTokenFromSession()
        ?
        <>
          <h2>authenticated</h2>
          <div>
            {missions}
          </div>
        </>
        :
        <>
          <h2> not authenticated</h2>
          <div>
            {missions}
          </div>
        </>
      }
    </div>
  );
}
