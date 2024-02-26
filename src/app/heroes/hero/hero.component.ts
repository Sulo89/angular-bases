import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  //getter luce como una propiedad (hay un pipe que nos evitaría hacer esto)
  get capitalizedName():string {
    return this.name.toUpperCase();
  }
  //métodos los llamo con () no usar private o solo podríamos usarlo en la clase.
  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  //cuando aún no hemos implementado un método se suele hacer lo siguiente:
  changeName():void{
    //TODO:
    throw 'Método no implementado'
  }

  changeHero():void {
    this.name = 'Spiderman'
  }

  changeAge():void {
    this.age = 25;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;

    // estaría fuera del ciclo de detección de cambios de Angular
    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

}
