import React,{ useLayoutEffect } from 'react'
import Header from '../Components/Header';
import Container from '../Components/Container'
import firebase from '../config/firebase';
import { useHistory } from "react-router-dom";



function Dashboard() {
    const History = useHistory();

    // conditional rendering on of use student or faculty 
    // # faculty
    // 1. new Request (not yet review with a tag on it )
    // # student
    // old Events by this personal 
    // faded if already passed time 
    // button for new event 
    // show model to request 
    // with allowed to set time and date if not clashing 
    // then post the request in for confimation from the server side
    // for the dashboard


    useLayoutEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user === null) {
                History.push('/Login')
                return
            }
        })
    }, [])

    return (
        <div >
            <Header />
            <Container />
        </div>
    )
}
export default Dashboard;
