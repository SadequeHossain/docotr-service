import React, { createContext, useEffect, useState } from 'react';
import useFirebase from './useFirebase';
// import useFirebase from './useFirebase';





export const userContext = createContext();


const UseContextProvider = ({ children }) => {
    // const firebaseContext = useFirebase();
    const [doctors, setDoctors] = useState([]);

    const firebaseData=useFirebase()

    // console.log('This is firbase data', firebaseData);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
                console.log('Here is', data)
            });
    }, []);

    console.log('this is', doctors)
    return (
        <userContext.Provider value={{doctors,firebaseData}}>
            {children}
        </userContext.Provider>
    );
};

export default UseContextProvider;







