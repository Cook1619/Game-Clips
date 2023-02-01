import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Website';
  name = "test"
  imgURL = 'https://picsum.photos/id/237/500/500'

  getName(){
    return 'Matt'
  }
  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value ;
  }
}
