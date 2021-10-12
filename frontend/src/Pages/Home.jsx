import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import firebase from '../config/firebase';


function Home() {
    const History = useHistory();
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user === null) {
                History.push('/Login')
                return
            } else {
                History.push("/Dashboard")
                return
            }
        })
    }, [])
    return (<></>)
}

export default Home
