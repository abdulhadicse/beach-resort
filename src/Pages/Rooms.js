import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import Hero from '../Components/Hero/Hero';
import RoomContainer from '../Components/RoomComponent/RoomContainer';

const Rooms = () => {
    return (
        <div>
            <Hero defaultHero="roomsHero">
                <Banner title="our rooms" subtitle="">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>

            <RoomContainer/>

        </div>
    );
};

export default Rooms;