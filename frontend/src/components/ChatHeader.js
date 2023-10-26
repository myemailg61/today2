import React from 'react'

const ChatHeader = () => {
    return (
        <div className='chat-container-header'>
            <div className='profile'>
                <div className='img-container'>
                    <img src=''></img>
                </div>
                <h3>Username</h3>
            </div>
            <i className={"log-out-icon"}>&larr;</i>
        </div>
    )
}

export default ChatHeader;