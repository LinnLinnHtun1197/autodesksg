import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import Landing from './Landing';
import Intro from './Intro';
import Guide from './Guide';
import Reference from './Reference';


const App = () => {
  return(
        <div>
            <BrowserRouter>
                <div>
                <Header />
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/developer/documentation" component={Landing} />
                    <Route path="/developer/en/api/dummy1/intro" component={Intro} />
                    <Route path="/developer/en/api/dummy1/guide" component={Guide} />
                    <Route path="/developer/en/api/dummy1/reference" component={Reference} />
                </div>
            </BrowserRouter>
        </div>
  )
}

export default App;
