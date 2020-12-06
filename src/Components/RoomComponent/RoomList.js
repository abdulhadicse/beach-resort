import React from 'react';
import Rooms from '../Rooms/Rooms';

const RoomList = ({ rooms }) => {
    
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters. </h3>
            </div>
        )
    }

    return (
        <div className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(rm => {
                        return <Rooms key={rm.id} room={rm}></Rooms>
                    })
                }
            </div>
        </div>
    );
};

export default RoomList;