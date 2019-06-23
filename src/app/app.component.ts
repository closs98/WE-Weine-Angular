import { Component, Input, EventEmitter, Inject, OnInit } from '@angular/core';
import { Wein } from './wein';
import { WeinService } from './wein.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weinService: WeinService) {}

  public weine$: Observable<Wein[]>;
  public title: string = 'Vinothek';
  public color: string = 'red';

  ngOnInit(){
    this.weinService.insert(new Wein(null, 'Test', 'Karlsruhe', 2019)).subscribe(o=>console.log(o));
    this.weine$ = this.weinService.getAll();
    this.weinService.get(0).subscribe(o=>console.log(o));
  }

  onClick(): void{
    this.color = 'hotpink';
    console.log(this.color);
  }

  deleteWine(id: number): void{
    console.log(id);
  }
}
