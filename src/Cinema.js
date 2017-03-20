import React, { Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {BSTable} from './BSTable.js'
import {Movie} from './Movie.js'


export class Cinema extends React.Component
{
    state = {
        currentPlace: "",
        };
  img_logan = './logo-main.png';


    UpdateValue(value)
    {
        this.setState({currentPlace: value});
    }

    isExpandableRow(row) 
    {
        return true;
    }

    expandComponent(row) 
    {
        return (
            <BSTable data={row.expand} main={row.main}/>
        );
    }


    render() 
    {
        var renderer = null;
        var products = [
        {
        id: "พารากอน ซีนีเพล็กซ์",
        expand: [{sub: 'พารากอน ซีนีเพล็กซ์'}]
        },
        {
        id: "ควอเทียร์ ซีเนอาร์ต",
        expand: [{sub: 'ควอเทียร์ ซีเนอาร์ต'}]
        },
        {
        id: "เมกา ซีนีเพล็กซ์",
        expand: [{sub: 'เมกา ซีนีเพล็กซ์'}]
        },
        {
        id: "เอสพลานาด ซีนีเพล็กซ์",
        expand: [{sub: 'เอสพลานาด ซีนีเพล็กซ์ งามวงศ์วาน-แคราย'},{sub: 'เอสพลานาด ซีนีเพล็กซ์ รัชดาภิเษก'}]
        },
        {
        id: "พาราไดซ์ ซีนีเพล็กซ์",
        expand: [{sub: 'พาราไดซ์ ซีนีเพล็กซ์'}]
        },
        {
        id: "หาดใหญ่ ซีนีเพล็กซ์",
        expand: [{sub: 'หาดใหญ่ ซีนีเพล็กซ์ เซ็นทรัลเฟสติวัล หาดใหญ่'}]
        },
        {
        id: "ซีนีเพล็กซ์",
        expand: [{sub: 'ซีคอน ซีนีเพล็กซ์'},{sub: 'บลูพอร์ต ซีนีเพล็กซ์'},{sub: 'พรอมานาด ซีนีเพล็กซ์'},{sub: 'อยุธยาซีตี้ ซีนีเพล็กซ์'},{sub: 'อีสตวิลล์ ซีนีเพล็กซ์'}]
        },
        {
        id: "เมเจอร์ ซีนีเพล็กซ์",
        expand: [{sub: 'เมเจอร์ ซีนีเพล็กซ์ ฉะเชิงเทรา'},{sub: 'เมเจอร์ ซีนีเพล็กซ์ รังสิต'},{sub: 'เมเจอร์ ซีนีเพล็กซ์ เซ็นทรัล พระราม2'}]
        },
        {
        id: "อีจีวี",
        expand: [{sub: 'อีจีวี บิ๊กซี ลำพูน'},{sub: 'อีจีวี บิ๊กซี ลำปาง'},{sub: 'อีจีวี บิ๊กซี ลาดพร้าว'},{sub: 'อีจีวี บิ๊กซี ศรีราชา'}]
        },
        {
        id: "กรุงศรี ซีนีเพล็กซ์",
        expand: [{sub: 'กรุงศรี ไอแมกซ์ พารากอน ซีนีเพล็กซ์'}]
        },
        {
        id: "โตโยต้า ซีนีเพล็กซ์",
        expand: [{sub: 'โตโยต้า ไอแมก์ ควอเทียร์ ซีเนอาร์ต'}]
        }];

        for(var i = 0; i < products.length; ++i)
        {
        products[i].main = this;
        }


        const options = {
            clearSearch: true,
        };  

        if(this.state.currentPlace == "")
        {
            renderer = 
            <BootstrapTable data={ products } 
                options={ options } 
                striped
                expandableRow={ this.isExpandableRow }
                expandComponent={ this.expandComponent }
                className={'background-inside-block'}
                
                >
                <TableHeaderColumn dataField='id' isKey={ true } className="header-table font-google-kanit">เครือ</TableHeaderColumn>
            </BootstrapTable>
        }
        else
        {
            renderer = <Movie place={this.state.currentPlace}/>
        }

        return (
            <div className="container my-margin-top200 font-google-kanit" style={{width:'370px'}}>
                <img src={'./logo-main.png'} width="94" height="41" className="my-margin-left140 my-margin-bottom20"/>

                <div className="box-shadow scrollbar" id="style-1">
                    <div className="force-overflow">
                         {renderer}

                    </div>

                </div>
            </div>
        );
    }
    
}