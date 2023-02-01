import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  // Angular doesn't assume what your building, this is a browser application, so we use Browser Module
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
