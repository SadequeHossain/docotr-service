import React, { createContext, useEffect, useState } from 'react';
import useFirebase from './useFirebase';
// import useFirebase from './useFirebase';





export const userContext = createContext();


const UseContextProvider = ({ children }) => {
    // const firebaseContext = useFirebase();
    const [doctors, setDoctors] = useState([]);
    const [services, setServices] = useState([]);
    const firebaseData = useFirebase()




    // console.log('This is firbase data', firebaseData);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
                // console.log('Here is', data)
            });

    }, []);

    console.log('this is', doctors)
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => {
                 console.log('Here is services', data)
                 setServices(data)
            
            })
        
    
   }, []);

console.log('Here is services', services)
return (
    <userContext.Provider value={{ doctors, firebaseData, services }}>
        {children}
    </userContext.Provider>
);
};

export default UseContextProvider;







