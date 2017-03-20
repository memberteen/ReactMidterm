import React, { Component, PropTypes } from 'react';
import {Times} from './Times.js';

export class Poster extends React.Component
{
    static propTypes = {
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        detail: PropTypes.string.isRequired,
        room: PropTypes.string.isRequired,
        time: PropTypes.object
    }
    
    //Poster
    render() 
    {
        let tim = [];

        for(var i = 0; i < this.props.time.length; i++)
        {
            tim.push 
            (
                <Times t={this.props.time[i]}/>
            );
        }
        return (
            <div className="boder-bottom-poster-movie">
                <div className="my-movie my-poster ">
                    <div className="row">
                        <div className="col-md-2">
                             <img src={this.props.img} width="90" height="127" className="my-image"/>
                        </div>
                         <div className="col-md-10" >
                            <p className="my-margin-left50">THEEATRE : {this.props.room}</p>
                            <h4 className="my-margin-left50">{this.props.title}</h4>
                            <p className="my-margin-left50">{this.props.detail}</p>
                            <table   className="my-margin-left46">
                                <tr>
                                    {tim}
                                </tr>
                            </table>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        );
    }
}