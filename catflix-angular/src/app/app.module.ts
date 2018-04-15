import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// import '../webcomponents/catflix-button/catflix-button.html';
// import '../webcomponents/catflix-cta/catflix-cta.html';
// import '../webcomponents/catflix-logo/catflix-logo.html';

// import '../../../webcomponents/catflix-button/catflix-button.html';
// import '../webcomponents/catflix-profile-thumb/catflix-profile-thumb.html';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
