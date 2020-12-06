import React from 'react';

const Hero = ({children, defaultHero}) => {
    return (
        <header className={defaultHero}>
            {children}
        </header>
    );
};

export default Hero;