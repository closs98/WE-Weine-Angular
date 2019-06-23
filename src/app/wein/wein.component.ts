import { Component, OnInit, Input, Output, EventEmitter, HostBinding, Inject } from '@angular/core';
import { Wein } from '../wein';
import { WeinService } from '../wein.service';

@Component({
  selector: 'app-wein',
  templateUrl: './wein.component.html',
  styleUrls: ['./wein.component.css']
})
export class WeinComponent implements OnInit {

  constructor(public weinService: WeinService) {}

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
