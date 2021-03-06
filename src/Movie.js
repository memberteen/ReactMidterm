import React, { Component, PropTypes } from 'react';
import {Poster} from './Poster.js';

export class Movie extends React.Component
{
    static propTypes = {
        place: PropTypes.string.isRequired
    }

    //Poster
    Logan = './major/thumb_1714-large.jpg';
    Kong = './major/thumb_1713-large.jpg';
    Beauty = './major/thumb_1712.jpg';
    DontKnockTwice = './major/thumb_1845.jpg';
    TheLastFace = './major/thumb_1871.jpg';
    ItsOnly = './major/thumb_1844.jpg';
    SwordArtOnline = './major/thumb_1853.jpg';
    TheRedTurtle ='./major/thumb_1824.jpg';
    render() 
    {
        

        var renderer = [];
        var cinema = [{Movie: "Logan", Room: "1" ,
                                       Detail: "โลแกน เดอะ วูล์ฟเวอรีน แอ็คชัน  137 นาที",
                                       Time: ["12:00", "15.00","21.00"] ,
                                       Poster: this.Logan,
                                       Place: ["พารากอน ซีนีเพล็กซ์",
                                               "เมกา ซีนีเพล็กซ์",
                                               "ควอเทียร์ ซีเนอาร์ต",
                                               "เอสพลานาด ซีนีเพล็กซ์ งามวงศ์วาน-แคราย",
                                               "เอสพลานาด ซีนีเพล็กซ์ รัชดาภิเษก",
                                               "พาราไดซ์ ซีนีเพล็กซ์",
                                               "หาดใหญ่ ซีนีเพล็กซ์ เซ็นทรัลเฟสติวัล หาดใหญ่",
                                               "ซีคอน ซีนีเพล็กซ์",
                                               "บลูพอร์ต ซีนีเพล็กซ์",
                                               "พรอมานาด ซีนีเพล็กซ์",
                                               "อยุธยาซีตี้ ซีนีเพล็กซ์",
                                               "อีสตวิลล์ ซีนีเพล็กซ์",
                                               "เมเจอร์ ซีนีเพล็กซ์ ฉะเชิงเทรา",
                                               "เมเจอร์ ซีนีเพล็กซ์ รังสิต",
                                               "อีจีวี บิ๊กซี ลำพูน",
                                               "อีจีวี บิ๊กซี ลำปาง",
                                               "อีจีวี บิ๊กซี ลาดพร้าว",
                                               "อีจีวี บิ๊กซี ศรีราชา",
                                               "กรุงศรี ไอแมกซ์ พารากอน ซีนีเพล็กซ์",
                                               "โตโยต้า ไอแมก์ ควอเทียร์ ซีเนอาร์ต"]
                      },
                      {Movie: "Kong Skull Island", Room: "2" ,
                                       Detail: "คอง มหาภัยเกาะกะโหลก แอ็คชัน , ผจญภัย  118 นาที",
                                       Time: ["13.10", "15:50","18:30","21:10"] ,
                                       Poster: this.Kong,
                                       Place: ["พารากอน ซีนีเพล็กซ์",
                                               "เมกา ซีนีเพล็กซ์",
                                               "ควอเทียร์ ซีเนอาร์ต",
                                               "เอสพลานาด ซีนีเพล็กซ์ งามวงศ์วาน-แคราย",
                                               "เอสพลานาด ซีนีเพล็กซ์ รัชดาภิเษก",
                                               "พาราไดซ์ ซีนีเพล็กซ์",
                                               "หาดใหญ่ ซีนีเพล็กซ์ เซ็นทรัลเฟสติวัล หาดใหญ่",
                                               "ซีคอน ซีนีเพล็กซ์",
                                               "บลูพอร์ต ซีนีเพล็กซ์",
                                               "พรอมานาด ซีนีเพล็กซ์",
                                               "อยุธยาซีตี้ ซีนีเพล็กซ์",
                                               "อีสตวิลล์ ซีนีเพล็กซ์",
                                               "เมเจอร์ ซีนีเพล็กซ์ ฉะเชิงเทรา",
                                               "เมเจอร์ ซีนีเพล็กซ์ รังสิต",
                                               "อีจีวี บิ๊กซี ลำพูน",
                                               "อีจีวี บิ๊กซี ลำปาง",
                                               "อีจีวี บิ๊กซี ลาดพร้าว",
                                               "อีจีวี บิ๊กซี ศรีราชา",
                                               "กรุงศรี ไอแมกซ์ พารากอน ซีนีเพล็กซ์",
                                               "โตโยต้า ไอแมก์ ควอเทียร์ ซีเนอาร์ต"]
                      },
                      {Movie: "Beauty and the Beast", Room: "3" ,
                                       Detail: "โฉมงามกับเจ้าชายอสูร ผจญภัย , แฟนตาซี  129 นาที",
                                       Time: ["12:00", "14:50","17:40","20:30"] ,
                                       Poster: this.Beauty,
                                       Place: ["พารากอน ซีนีเพล็กซ์",
                                               "เมกา ซีนีเพล็กซ์",
                                               "ควอเทียร์ ซีเนอาร์ต",
                                               "เอสพลานาด ซีนีเพล็กซ์ งามวงศ์วาน-แคราย",
                                               "เอสพลานาด ซีนีเพล็กซ์ รัชดาภิเษก",
                                               "พาราไดซ์ ซีนีเพล็กซ์",
                                               "หาดใหญ่ ซีนีเพล็กซ์ เซ็นทรัลเฟสติวัล หาดใหญ่",
                                               "ซีคอน ซีนีเพล็กซ์",
                                               "บลูพอร์ต ซีนีเพล็กซ์",
                                               "พรอมานาด ซีนีเพล็กซ์",
                                               "อยุธยาซีตี้ ซีนีเพล็กซ์",
                                               "อีสตวิลล์ ซีนีเพล็กซ์",
                                               "เมเจอร์ ซีนีเพล็กซ์ ฉะเชิงเทรา",
                                               "เมเจอร์ ซีนีเพล็กซ์ รังสิต",
                                               "อีจีวี บิ๊กซี ลำพูน",
                                               "อีจีวี บิ๊กซี ลำปาง",
                                               "อีจีวี บิ๊กซี ลาดพร้าว",
                                               "อีจีวี บิ๊กซี ศรีราชา",
                                               "กรุงศรี ไอแมกซ์ พารากอน ซีนีเพล็กซ์",
                                               "โตโยต้า ไอแมก์ ควอเทียร์ ซีเนอาร์ต"]
                      },
                      {Movie: "Dont Knock Twice", Room: "4" ,
                                       Detail: "เคาะสองที อย่าให้ผีเข้าบ้าน สยองขวัญ  93 นาที",
                                       Time: ["12:30"] ,
                                       Poster: this.DontKnockTwice,
                                       Place: ["พารากอน ซีนีเพล็กซ์",
                                               "เมกา ซีนีเพล็กซ์",
                                               "ควอเทียร์ ซีเนอาร์ต",
                                               "เอสพลานาด ซีนีเพล็กซ์ งามวงศ์วาน-แคราย",
                                               "เอสพลานาด ซีนีเพล็กซ์ รัชดาภิเษก",
                                               "พาราไดซ์ ซีนีเพล็กซ์",
                                               "หาดใหญ่ ซีนีเพล็กซ์ เซ็นทรัลเฟสติวัล หาดใหญ่",
                                               "ซีคอน ซีนีเพล็กซ์",
                                               "บลูพอร์ต ซีนีเพล็กซ์",
                                               "พรอมานาด ซีนีเพล็กซ์",
                                               "อยุธยาซีตี้ ซีนีเพล็กซ์",
                                               "อีสตวิลล์ ซีนีเพล็กซ์",
                                               "เมเจอร์ ซีนีเพล็กซ์ ฉะเชิงเทรา",
                                               "เมเจอร์ ซีนีเพล็กซ์ รังสิต",
                                               "อีจีวี บิ๊กซี ลำพูน",
                                               "อีจีวี บิ๊กซี ลำปาง",
                                               "อีจีวี บิ๊กซี ลาดพร้าว",
                                               "อีจีวี บิ๊กซี ศรีราชา",
                                               "กรุงศรี ไอแมกซ์ พารากอน ซีนีเพล็กซ์",
                                               "โตโยต้า ไอแมก์ ควอเทียร์ ซีเนอาร์ต"]
                      },
                      {Movie: "The Last Face", Room: "5" ,
                                       Detail: "ความรัก ศรัทธา ห่ากระสุน ชีวิต , โรแมนติก  132 นาที",
                                       Time: ["14:40", "17:40","20:40"] ,
                                       Poster: this.TheLastFace,
                                       Place: ["พารากอน ซีนีเพล็กซ์",
                                               "เอสพลานาด ซีนีเพล็กซ์ งามวงศ์วาน-แคราย",
                                               "โตโยต้า ไอแมก์ ควอเทียร์ ซีเนอาร์ต"]
                      },
                      {Movie: "Its Only the end of the World", Room: "6" ,
                                       Detail: "เรื่องรักโลกแตก ชีวิต  97 นาที",
                                       Time: ["12:00", "16:30"] ,
                                       Poster: this.ItsOnly,
                                       Place: ["พารากอน ซีนีเพล็กซ์",
                                               "โตโยต้า ไอแมก์ ควอเทียร์ ซีเนอาร์ต"]
                      },
                      {Movie: "Sword Art Online The Movie", Room: "7" ,
                                       Detail: "ซอร์ต อาร์ต ออนไลน์ เดอะ มูฟวี่ ออร์ดินอล สเกล แอนิเมชัน  119 นาที",
                                       Time: ["11:30"] ,
                                       Poster: this.SwordArtOnline,
                                       Place: ["พารากอน ซีนีเพล็กซ์",
                                               "ควอเทียร์ ซีเนอาร์ต",
                                               "กรุงศรี ไอแมกซ์ พารากอน ซีนีเพล็กซ์",
                                               "โตโยต้า ไอแมก์ ควอเทียร์ ซีเนอาร์ต"]
                      }
                      ,
                      {Movie: "The Red Turtle", Room: "8" ,
                                       Detail: "เต่าแดง แอนิเมชัน  80 นาที",
                                       Time: ["19:00"] ,
                                       Poster: this.TheRedTurtle,
                                       Place: ["พารากอน ซีนีเพล็กซ์",
                                               "เมกา ซีนีเพล็กซ์",
                                               "ควอเทียร์ ซีเนอาร์ต",
                                               "เอสพลานาด ซีนีเพล็กซ์ งามวงศ์วาน-แคราย"]
                      }
                    ];
        let existMovie = [];
        let places;
        places = this.props.place;
        for(var i = 0; i < cinema.length; ++i)
        {
            for(var o = 0;o < cinema[i].Place.length;++o)
            {
                if(cinema[i].Place[o] != this.props.place) continue;
                existMovie.push(cinema[i]);
                break;

            }
        }


        
        for(var i = 0; i < existMovie.length; i++)
        {
            renderer.push 
            (
                <Poster img={existMovie[i].Poster} title={existMovie[i].Movie} room={existMovie[i].Room} detail={existMovie[i].Detail} time={existMovie[i].Time}/>
            );
        }
        
        return (
                <div className="font-google-kanit">
                    <div className="boder-headerbox-movie my-margin-top15 my-margin-bottom-10">
                        <div>
                             <h5 className="my-margin-left10">{places}</h5>
                        </div>
                    </div>
                    <div className=" background-BoxMovie">
                         {renderer}       

                    </div>
                </div>
        );
    }
}