import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RoomContext } from '../context';
import Banner from '../Components/Banner/Banner';
import Hero from '../Components/Hero/Hero';

const SingleRoom = () => {

    const { getSingleRoom } = useContext(RoomContext);
    let { slug } = useParams();

    const [room, setRoom] = useState(0);

    useEffect(() => {
        const roomData = getSingleRoom(slug);
        setRoom(roomData);
    })

    console.log(room);

    if (!room) {
        return <div className="error">
            <h3>no such room could be found...</h3>
            <Link to="/" className="btn-primary">Back To Home</Link>
        </div>
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, image } = room;

    const mystyle = {
        minHeight: "60vh",
        backgroundImage: `url(${image[0]})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }


return (
    <div>
        <div style={mystyle}>
            <Banner title={`${name} room`} subtitle="">
                <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </div>

        <div className="single-room">
            <div className="single-room-images">
                {
                    image.map( (item, index) => {
                        return <img key={index} src={item} alt={name}/>
                    } )
                }
            </div>

            <div className="single-room-info">
                <div className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </div>

                <div className="info">
                    <h3>info</h3>
                    <h6>price: ${price}</h6>
                    <h6>size: ${size} SQFT</h6>
                    <h6>max capacity : {capacity>1 ? `${capacity} people` : `${capacity} person`}</h6>
                    <h6>{pets ? `pet allowed` : `no pet allowed`}</h6>
                    <h6>{breakfast && `free breakfast included`}</h6>
                </div>
            </div>
        </div>

        <div className="room-extras">
            <h6>extras</h6>
            <ul className="extras">

                {
                    extras.map( (item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }

            </ul>
        </div>
    </div>
);
};

export default SingleRoom;