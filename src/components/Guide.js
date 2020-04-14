import React,{Component} from 'react';

class Guide extends Component{
    render(){
        return(
            <div className="container">
                <h1>Guide Page</h1>
                <p>OAuth, specifically OAuth2, is the open standard used across the Forge Platform for token-based authentication and authorization.</p>
                <p>In this section, you will find the following resources:</p>
                <ol>
                    <li>How to register an app on the platform</li>
                    <li>Explanations of basic concepts, such as client ID and secret, tokens, scopes, and two-legged versus three-legged authentication</li>
                    <li>Step-by-step tutorials that walk you through a few common workflows</li>
                    <li>Documentation on each of the OAuth REST endpoints</li>
                </ol>
            </div>
        )
    }
}

export default Guide;