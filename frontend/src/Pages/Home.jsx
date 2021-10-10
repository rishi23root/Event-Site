import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
// import Header from '../Components/Header';
import firebase from '../config/firebase';


function Home() {
    const History = useHistory();
    // use to redirec the user if not login 
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

    // for the dashboard
    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         if (user === null) {
    //             History.push('/Login')
    //             return
    //         }
    //     })
    // }, [])

    // logout btn 
    // firebase.auth().signOut().then(() => {
    //     // Sign-out successful.
    // }).catch((error) => {
    //     // An error happened.
    // });


    return (<></>)
}

export default Home
