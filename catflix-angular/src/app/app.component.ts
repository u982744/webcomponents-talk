import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <catflix-modal
      *ngFor='let modal of modals; let i = index;'
      [attr.url]="'https://www.youtube.com/embed/' + modal.id + '?rel=0'"
      [attr.open]='modal.open'
      (modalClose)="modalClose(i)"></catflix-modal>

    <div class="container flex">
      <div class="logo">
        <catflix-logo></catflix-logo>
      </div>
      <div class="cta">
        <catflix-cta text="Who's watching?"></catflix-cta>
      </div>
      <div class="profiles">
          <catflix-profile-thumb
            *ngFor="let profile of profiles; let i = index"
            [attr.img]="'/assets/imgs/' + profile.img"
            [name]="profile.name"
            (click)='viewVideo(i)'></catflix-profile-thumb>
      </div>
      <div class="manage">
        <catflix-button>Manage profiles</catflix-button>
      </div>
    </div>
  `,
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

  public viewVideo(index) {
    this.modals[index].open = true;
  }

  public modalClose(index) {
    this.modals[index].open = false;
  }
}
