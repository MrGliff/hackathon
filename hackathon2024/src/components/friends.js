import React from 'react'
import Friend from './friendList';
import FriendActivity from './friendActivity';
import './styles/friends.css';

function Friends() {
    return (
        <div className="friendWrapper">
            <div className="friendList ml-10">
                <h1 className='font-bold text-xl mt-10 ml-5'>Friend List: </h1>
                <Friend name="Yatharth Singh Panwar" username="@yatharth" />
                <Friend name="Dharmin Nagar" username="@dnagar2075" />
                <Friend name="Saachi Parekh" username="@saachi" />
                <Friend name="Harsh Mehta" username="@harsh05" />
                <Friend name="Priyanka Bhatt" username="@priyanka" />
                <Friend name="Rishabh Gajjiwala" username="@rishabh" />
                <Friend name="Skand Singh" username="@skand" />
            </div>

            <div className='friendActivity'>
                <h1 className='font-bold text-xl mt-10 ml-5'>Friend Activity: </h1>
                <div className='childActivity'>

                    <FriendActivity name="Yatharth Singh Panwar" username="@yatharth" description="I studied Web3 for 2 hours today" />
                    <FriendActivity name="Dharmin Nagar" username="@dnagar2075" description="I studied DevOps for 1.5 hours today" />
                    <FriendActivity name="Saachi Parekh" username="@saachi" description="I studied Psychology for 2.5 hours today" />
                    <FriendActivity name="Rishabh Gajjiwala" username="@rishabh" description="I studied JavaScript for 1.87 hours today" />
                    <FriendActivity name="Priyanka Bhatt" username="@priyanka" description="I studied Maths for 1 hour today" />
                    <FriendActivity name="Skand Singh" username="@skand" description="I studied MERN Stack for 4 hours today" />
                </div>
            </div>
        </div>
    )
}

export default Friends