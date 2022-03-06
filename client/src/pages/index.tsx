import React, { useEffect, useState } from 'react';
import { getMissions } from '../services/missions/missionService'

export const Index = () => {
  const [missions, setMissions] = useState([]);


  useEffect(() => {
    const wrapperFunction = async () => {
      const response = await getMissions()
      setMissions(response.data)
    }
    wrapperFunction()
  }, [])

  return (
    <div>
      {missions
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
