import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Estadisticas';

  lenguajes : any = [
    {nombre: "Python"},
    {nombre: "Java"},
    {nombre: "Javascript"},
    {nombre: "C++"},
  ];

  constructor(){

  }

}
