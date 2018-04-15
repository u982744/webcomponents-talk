import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container flex">
        <div className="logo">
          <catflix-logo></catflix-logo>
        </div>
        <div className="cta">
          <catflix-cta text="Who's watching?"></catflix-cta>
        </div>
        <div className="profiles">
          <catflix-profile-thumb img="/assets/imgs/cat-2.jpg" name="Cee cee"></catflix-profile-thumb>
          <catflix-profile-thumb img="/assets/imgs/cat-3.jpg" name="Cupcake"></catflix-profile-thumb>
          <catflix-profile-thumb img="/assets/imgs/cat-6.jpg" name="Tweet tweet"></catflix-profile-thumb>
          <catflix-profile-thumb img="/assets/imgs/cat-7.png" name="Garfield"></catflix-profile-thumb>
        </div>
        <div className="manage">
          <catflix-button>Manage profiles</catflix-button>
        </div>
      </div>
    );
  }
}

export default App;
