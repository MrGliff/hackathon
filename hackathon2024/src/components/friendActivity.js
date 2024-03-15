import React from 'react'
import './styles/friendActivity.css';
import nopfp from './images/default.jpg';

export default function FriendActivity(props) {
    return (
        <>
            <div className="friendMargin mt-5">
                <div className="friendContainer">
                    <img src={nopfp} />
                </div>
                <div className="card pl-5">
                    <h1>{props.name}</h1>
                    <p className="username">{props.username}</p>
                    <div className="post">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}