import React from 'react';
import { Link } from 'react-router-dom';

const Rooms = ({ room }) => {
    
    const { name, slug, image, price } = room;

    return (
        <div className="room">

            <div className="img-container">
                <img src={image[0]} alt="" />

                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>

                <Link to={`/rooms/${slug}`} className="btn-primary room-link"> Features</Link>
            </div>

            <div className="room-info">
                {name}
            </div>

        </div>
    );
};

export default Rooms;