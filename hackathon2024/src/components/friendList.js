import React from 'react';
import './styles/friendList.css';
import nopfp from './images/default.jpg';

export default function friend(props) {
    return (
        <div>
            <div className="friendMargin mt-5">
                <div className="friendContainer">
                    <img src={nopfp} alt="Harsh" />
                    <div className="card pl-5">
                        <h1>{props.name}</h1>
                        <p className="username">{props.username}</p>
                        <div className="friendButton">
                            <p><button className='unfriend'>Unfriend</button></p>
                        </div>
                    </div>

                    {/* <div className="col-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1601932930529-6f4e0e1b4b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="John" />
                            <h1>John Doe</h1>
                            <p className="title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <p><button>Contact</button></p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1601932930529-6f4e0e1b4b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="John" />
                            <h1>John Doe</h1>
                            <p className="title">CEO & Founder</p>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    )
}
