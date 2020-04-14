import React,{Component} from 'react';

class Dashboard extends Component{
    render(){
        return(
            <div className="container">
                <h3>Dashboard Page</h3>
                <p>Hello, I'm Linn Linn Htun. Nice to meet you! Have a nice day.</p>
                <h4>You can use the following link for each pages.</h4>
                <ol>
                    <li>/developer/documentation</li>
                    <li>/developer/en/api/dummy1/intro</li>
                    <li>/developer/en/api/dummy1/guide</li>
                    <li>/developer/en/api/dummy1/reference</li>
                </ol>
                <h4>OR</h4>
                <p>You can click Logo and continue each intro,guide and reference link.</p>
            </div>
        )
    }
}

export default Dashboard;