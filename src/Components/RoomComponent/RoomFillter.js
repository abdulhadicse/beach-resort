import React, { useContext } from 'react';
import { RoomContext } from '../../context';

const RoomFillter = ({ rooms }) => {
    
    const context = useContext(RoomContext);

    const { handleChange, price, minPrice, maxPrice } = context;

    let newData = ['all'] 
    
    for (var i in rooms) {
        const data = rooms[i].type;
        newData = [...newData, data];       
    }
    let unique = [...new Set(newData)]

    return (
        <div className="filter-container">
            
            <div className="section-title">
                <h4>Search Rooms</h4>
                <div></div>
            </div>

            <form className="filter-form">

                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select onChange={handleChange} name="type" id="type" className="form-control">
                        {
                            unique.map(d => {
                                return <option key={d}>{d}</option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input onChange={handleChange} type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} className="form-control"/>
                </div>

                
            </form>
        </div>
    );
};

export default RoomFillter;