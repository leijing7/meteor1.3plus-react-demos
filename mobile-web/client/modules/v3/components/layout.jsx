import React from 'react';


export const MainLayout = ({content = () => null }) => {
  return(
    <div>
      {content()}
    </div>
  )
};
