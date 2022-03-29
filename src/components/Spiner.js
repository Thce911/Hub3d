import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import { GridLoader } from 'react-spinners';
 
export const Spiner = (props) => {
 const { promiseInProgress } = usePromiseTracker();
 
  return (
    <div>
    {
       (promiseInProgress === true) ?
        <GridLoader />
      :
        null
    }
  </div>
  )
};