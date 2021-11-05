import React from 'react'
import "../Css/Container.css"

export default function Container() {
    const changeBackground = () => {
        console.log(window.scrollY)
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <>
            <div className="container">
                <h3>Previous Events</h3>
                <div className="previousevent">



                    <h2>Today</h2>
                    <div className="events">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look
                    </div>
                    <h2>Today</h2>
                    <div className="events">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look
                    </div>
                    <h2>Tomorrow</h2>
                    <div className="events">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look
                    </div>
                    <h2>Tomorrow</h2>
                    <div className="events">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look
                    </div>
                    <h2>Yesturday</h2>
                    <div className="events">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look
                    </div>
                    <h2>Yesturday</h2>
                    <div className="events">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look
                    </div>
                    <h2>Yesturday</h2>
                    <div className="events">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look
                    </div>
                    <h2>Tomorrow</h2>
                    <div className="events">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look
                    </div>
                    <h2>Tomorrow</h2>
                    <div className="events">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look
                    </div>
                </div>
                <div className="side">
                    <div className="bookevent">
                        <button className="newevent"> New Event</button>
                    </div>
                    <div className="event-to-be">
                        <div className="upcomingevent">
                            <h3>Up Coming Events </h3>
                            <h2>Technojam</h2>
                            <div className="events">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don't look
                            </div>
                            <h2>Technojam</h2>
                            <div className="events">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don't look
                            </div>
                            <h2>Technojam</h2>
                            <div className="events">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don't look
                            </div>
                            <h2>Technojam</h2>
                            <div className="events">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don't look
                            </div>
                            <h2>Technojam</h2>
                            <div className="events">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don't look
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
