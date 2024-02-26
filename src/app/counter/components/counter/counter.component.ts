import { Component } from '@angular/core';

@Component({
  //nombre del componente
  selector: 'app-counter',
  //en vez templateUrl, usamos template y no usamos el .html
  template: `
    <h3>Counter: {{ counter }}</h3>
    <!--
      no hace falta this
    <button (click)="this.increaseBy(+1)">+1</button>
    -->
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})
export class CounterComponent  {
  public counter: number = 10;

  /*
  no se suele poner public aunque sea
  public increaseBy( value: number ):void {
    this.counter += value;
  }
  */

  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}

