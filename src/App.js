import React, { Component } from 'react';
import './App.css';
import AppHeader from './screens/AppHeader';
import AppBody from './screens/AppBody';
import AppFooter from './screens/AppFooter';
class App extends Component {
  render() {
    return (

          <div>
                  <AppHeader />
                  <AppBody />
                  <AppFooter />
            
            
            
             </div> 
        
          
    );
  }
}

export default App;
