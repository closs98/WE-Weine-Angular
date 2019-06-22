import { Component, Input, EventEmitter } from '@angular/core';
import { Wein } from './wein';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Vinothek';
  public color: string = 'red';
  public weine: Wein[] = [
    new Wein(0, "Schwarzriesling", "Pfalz", 2012),
    new Wein(1, "Merlot", "Baden", 2015),
    new Wein(2, "Graubugunder", "Pfalz", 2009)
  ]

  onClick(): void{
    this.color = 'hotpink';
    console.log(this.color);
  }

  deleteWine(id: number): void{
    console.log(id);
  }
}
