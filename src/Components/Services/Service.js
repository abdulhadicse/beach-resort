import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
class Service extends Component {

    constructor() {
        super();

        this.state = {
            service: [
                {
                    icon: <FaCocktail />,
                    title: "Free Cocktail",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eos aut, minima repellat consequuntur officia!"
                },
                {
                    icon: <FaHiking />,
                    title: "Endless Hiking",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eos aut, minima repellat consequuntur officia!"
                },
                {
                    icon: <FaShuttleVan />,
                    title: "Free Shuttle",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eos aut, minima repellat consequuntur officia!"
                },
                {
                    icon: <FaBeer />,
                    title: "Stongest Beer",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eos aut, minima repellat consequuntur officia!"
                }
            ]
        }
    }
    render() {
        return (
            <div className="services">
                <div className="section-title">
                    <h4>Services</h4>
                    <div></div>
                </div>
                

                <div className="services-center">
                    {
                        this.state.service.map((item, index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.text}</p>
                            </article>
                        })
                    }
                </div>

            </div>
        );
    }
}

export default Service;