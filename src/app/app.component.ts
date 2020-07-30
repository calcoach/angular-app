import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Estadisticas';

  lenguajes : any = [
    {nombre: "Python", active: true},
    {nombre: "Java", active: false},
    {nombre: "Javascript", active: true},
    {nombre: "C++", active: false},
  ];

  constructor(){

  }

}
