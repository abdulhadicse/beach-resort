import React from 'react';
import { RoomConsumer } from '../../context';
import RoomFillter from './RoomFillter';
import RoomList from './RoomList';

const RoomContainer = () => {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const { rooms, sortedRooms } = value;
                    return (
                        <div>
                            <RoomFillter rooms={rooms}></RoomFillter>
                            <RoomList rooms={sortedRooms}></RoomList>
                        </div>
                    )
                }
            }
        </RoomConsumer>
    );
};

export default RoomContainer;