import React from 'react';

export const index = () => {
  // todo: get jwtToken from session storage
  const getTokenFromSession = () => {
    return sessionStorage.getItem('token') || '';
  }

  return (
    <div>
      {getTokenFromSession()
        ? <h2>authenticated</h2>
        : <h2>not authenticated</h2>
      }
    </div>
  );
}
