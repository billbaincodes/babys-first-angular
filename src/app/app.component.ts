import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'todolist';
  name:string = "candy";
  age:number = 20

  constructor(){
    this.changeName("Gregory")
  }

  changeName = (name:string):void => {
    this.name = name;
  }
}
