import React, { Component } from 'react';
import './App.css';
import CatflixModal from './CatflixModal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modals: [
        {
          id: 'TWDb2Zb6jLQ',
          open: null
        },
        {
          id: 'mSBKZPNsK74',
          open: null
        },
        {
          id: '0Bmhjf0rKe8',
          open: null
        },
        {
          id: 'QH2-TGUlwu4',
          open: null
        }
      ],
      profiles: [
        { img: 'netflix-avatar-1.png', name: 'Tim'},
        { img: 'netflix-avatar-2.png', name: 'Cindy'},
        { img: 'netflix-avatar-3.png', name: 'Mum'},
        { img: 'netflix-avatar-4.png', name: 'Grandpa'}
      ]
    };
  }

  render() {
    return (
      <div className="container flex">
        {
          this.state.modals.map((modal, index) => (
            <CatflixModal
              key={ modal.id }
              url={ 'https://www.youtube.com/embed/' + modal.id + '?rel=0' }
              open={ modal.open }
              onModalClose={() => this.modalClose(index) }></CatflixModal>
          ))
        }
        <div className="logo">
          <catflix-logo img='netflix-logo.png'></catflix-logo>
        </div>
        <div className="cta">
          <catflix-cta text="Who's watching?"></catflix-cta>
        </div>
        <div className="profiles">
          {
            this.state.profiles.map((profile, index) => (
              <catflix-profile-thumb
                key={ profile.img }
                img={ profile.img }
                name={ profile.name }
                onClick={ () => { this.viewVideo(index); } }></catflix-profile-thumb>
            ))
          }
        </div>
        <div className="manage">
          <catflix-button>Manage profiles</catflix-button>
        </div>
      </div>
    );
  }

  viewVideo(index) {
    const newModals = [...this.state.modals];
    newModals[index].open = true;
    this.setState({
      modals: newModals
    });
  }

  modalClose(index) {
    const newModals = [...this.state.modals];
    newModals[index].open = false;
    this.setState({
      modals: newModals
    });
  }
}

export default App;
