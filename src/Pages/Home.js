import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import FeaturedRoom from '../Components/FeaturedRoom/FeaturedRoom';
import Hero from '../Components/Hero/Hero';
import Service from '../Components/Services/Service';
import { RoomContext } from '../context';

const Home = () => {

    const data = useContext(RoomContext);
    return (
        <div>
            <Hero defaultHero="defaultHero">
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>

            <Service></Service>

            <FeaturedRoom></FeaturedRoom>
           

        </div>
    );
};

export default Home;