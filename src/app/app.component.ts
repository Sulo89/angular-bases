import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Hola Mundo';//propiedad del componente
}
/*
mejor
export class AppComponent {

  public title: string = 'Hola Mundo';


}
*/
