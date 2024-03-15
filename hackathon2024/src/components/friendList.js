import React from 'react';
import './styles/friendList.css';
import nopfp from './images/default.jpg';

export default function friendList(props) {
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
                </div>
            </div>
        </div>
    )
}