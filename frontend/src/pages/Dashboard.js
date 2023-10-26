import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card/'
import ChatContainer from '../components/ChatContainer';


const Dashboard = () => {
    const [lastDirection, setLastDirection] = useState();
    const [user, setUser] = useState(null);
    const [genderedUsers, setGenderedUsers] = useState(null);

    const characters = [
        {
            name: 'Richard Hendricks',
            url: 'https://imgur.com/kHCk6eM.jpg'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://imgur.com/kHCk6eM.jpg'
        },
        {
            name: 'Monica Hall',
            url: 'https://imgur.com/kHCk6eM.jpg'
        },
        {
            name: 'Jared Dunn',
            url: 'https://imgur.com/kHCk6eM.jpg'
        },
        {
            name: 'Dinesh ',
            url: 'https://imgur.com/kHCk6eM.jpg'
        }
    ]

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }


    return (
        <div className='dashboard'>
            <ChatContainer></ChatContainer>
            <div className='swiper-container'>
                <div className='card-container'>

                    {characters.map((character) =>
                        <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )
                    };
                    <div className='swipe-info'>
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard