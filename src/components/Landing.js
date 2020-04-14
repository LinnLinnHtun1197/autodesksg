import React, { Component } from 'react';
import './css/card.css';
import CardData from '../data/card.json';
import logo from './apple.png';
// import { render } from 'react-dom';
// import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const linkstyle = {
    color: '#666',
    fontSize: '1.2em',
    fontWeight: '500',
    textTransform: 'none',
};
 
class Landing extends Component{
    render(){
        return(
            <div className="container">
                {/* api service text */}
                <h2>APIs & Services</h2>
                <p>Access information on how to use Forge APIs and Services</p>

                <div class="row">
                    {CardData.map((cardDetail,index)=>{
                    return <div>
                        <div class="col s12 m4">
                        <div class="card">
                            <div class="card-content first-card">
                                <span class="card-title"><img src={logo} alt="Logo" width="20" height="20"/>   {cardDetail.title}</span>
                                
                                <p>{cardDetail.description}</p>
                            </div>
                            <div class="card-action c1">
                                <a href="/developer/en/api/dummy1/intro" style={linkstyle}>{cardDetail.link!=null ? cardDetail.link:null}<span class="gre">{cardDetail.link!=null? '>':null}</span></a>
                            </div>
                            <div class="card-action c1">
                                <a href="/developer/en/api/dummy1/guide" style={linkstyle}>{cardDetail.link1}<span class="gre">></span></a>
                            </div>
                            <div class="card-action">
                                <a href="/developer/en/api/dummy1/reference" style={linkstyle}>{cardDetail.link2}<span class="gre">></span></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    })}
                </div>
                
            </div>
        );
    }
}
 
export default Landing;