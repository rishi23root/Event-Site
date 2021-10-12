import React from 'react'
import Header from '../Components/Header';
import Container from '../Components/Container'

function Dashboard() {
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
    return (
        <div>
            <Header />
            <Container />
        </div>
    )
}
export default Dashboard;
