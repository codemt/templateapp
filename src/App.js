import React, { Component } from 'react';
import './App.css';
import AppHeader from './screens/AppHeader';
import AppBody from './screens/AppBody';
import AppFooter from './screens/AppFooter';
import AppComponent2 from './screens/AppComponent2';
class App extends Component {
  render() {
    return (

          <div>
                  <AppHeader />
                  <AppBody />
                  <AppComponent2 />
                  <AppFooter />
            
            
            
         </div> 
        
          
    );
  }
}

export default App;
