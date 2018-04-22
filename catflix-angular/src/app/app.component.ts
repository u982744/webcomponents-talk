import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  modals = [
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
  ];
  profiles = [
    { img: 'cat-2.jpg', name: 'Cee cee'},
    { img: 'cat-3.jpg', name: 'Cupcake'},
    { img: 'cat-6.jpg', name: 'Tweet tweet'},
    { img: 'cat-7.png', name: 'Garfield'}
  ];

  viewVideo(index) {
    this.modals[index].open = true;
  }
}
