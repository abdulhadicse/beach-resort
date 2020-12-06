import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import Hero from '../Components/Hero/Hero';

const Error = () => {
    return (
        <div>
            <Hero defaultHero="defaultHero">
                <Banner title="404" subtitle="page not found">
                    <Link to="\" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
        </div>
    );
};

export default Error;