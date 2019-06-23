import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Wein } from '../wein';

@Component({
  selector: 'app-wein',
  templateUrl: './wein.component.html',
  styleUrls: ['./wein.component.css']
})
export class WeinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  wein: Wein;

  @Output()
  public deleteComp = new EventEmitter<number>();

  onDelete(){
    this.deleteComp.emit(this.wein.id);
  }
}
