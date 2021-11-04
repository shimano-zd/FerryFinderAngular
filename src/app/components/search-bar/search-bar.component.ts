import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() width: string;
  @Input() title: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public value: string;

  constructor() { }

  ngOnInit() {
    this.value = '';
  }

  onKeyDown(keyEvent: KeyboardEvent){
    
     if(keyEvent.key == 'Enter'){
        this.search.emit(this.value);
        this.value = '';
      }
  }

}
