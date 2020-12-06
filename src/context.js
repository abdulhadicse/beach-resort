import React, { Component, createContext } from 'react';
import items from './data';

const RoomContext = createContext();

class RoomProvider extends Component {
    
    constructor(){
        super();
        this.state = {
            rooms:[],
            featuredRooms:[],
            sortedRooms:[],
            loading: true,
            type: "all",
            capacity: 1,
            price: 600,
            minPrice: 0,
            maxPrice: 600,
            minSize: 0,
            maxSize: 0,
            breakfast: false,
            pets: false
        }   
          
    }

    getSingleRoom = (slug) =>{
        let tempRoom = [...this.state.rooms];
        const singleRoom = tempRoom.find ( tr => tr.slug === slug);
        return singleRoom;
    }

    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter( fr => fr.featured === true);

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false
        });

    }

    formatData(data){
        let tempItem = data.map( dt => {
            let id= dt.sys.id;
            let image = dt.fields.images.map( img => img.fields.file.url);
            let room = {...dt.fields, image, id};
            return room;
        } )
        
        return tempItem;
    }

    handleChange = (event) => {      
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value },this.filterRooms);
    }

    filterRooms = () => {
        const { rooms, type, price } = this.state;

        let tempRooms = [...rooms];

        if (type !== "all") {
            tempRooms = tempRooms.filter(rm => rm.type === String(type));
        }

        tempRooms = tempRooms.filter(rm => rm.price <= price);
        

        this.setState({ sortedRooms: tempRooms });
       
    }


    render() {
        return (
            <RoomContext.Provider value={{...this.state, getSingleRoom: this.getSingleRoom, handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};