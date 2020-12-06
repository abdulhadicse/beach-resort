import React, { Component } from 'react';
import { RoomContext } from '../../context';
import Rooms from '../Rooms/Rooms';

class FeaturedRoom extends Component {
    static contextType = RoomContext;
    render() {
        const {featuredRooms} = this.context;
        const rooms = featuredRooms.map( fr => {
            return <Rooms key={fr.id} room={fr} />
        } )


        return (
            <div className="featured-rooms">
                <div className="section-title">
                    <h4>Featured Rooms</h4>
                    <div></div>
                </div>

                <div className="featured-rooms-center">
                    {rooms}
                </div>
            </div>
        );
    }
}

export default FeaturedRoom;