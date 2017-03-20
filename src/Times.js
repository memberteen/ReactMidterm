import React, { Component, PropTypes } from 'react';

export class Times extends React.Component
{
    static propTypes = {
        t: PropTypes.string.isRequired
    }
    
    //Poster
    render() 
    {
        return (
                <th >
                    <span className="border-time">
                        {this.props.t}
                    </span>
                </th>
        );
    }
}