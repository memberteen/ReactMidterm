import React, { Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export class BSTable extends React.Component
{
    constructor(props) 
    {
        super(props);
    }

    onMouseClick = (row) => 
    {
        this.props.main.UpdateValue(row.sub);
    }

    render() 
    {
        if (this.props.data) 
        {
            const options = {
                onRowClick: this.onMouseClick,
            }

            return (
                <BootstrapTable data={ this.props.data } options={options}>
                    <TableHeaderColumn dataField='sub' isKey={ true } className="font-google-kanit">สาขา</TableHeaderColumn>
                </BootstrapTable>
            );
        } 
        else 
        {
            return (<p>?</p>);
        }
    }
}