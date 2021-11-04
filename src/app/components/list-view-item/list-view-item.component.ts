import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-view-item',
  templateUrl: './list-view-item.component.html',
  styleUrls: ['./list-view-item.component.css']
})
export class ListViewItemComponent implements OnInit {

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() hoverable: boolean;

  constructor() { }

  ngOnInit() {

  }

  onItemClick(): void {
    if (this.onClick) {
      this.onClick.emit();
    }
  }

  getClass(): string {
    let cssClass = "templated-list-item";
    if (this.hoverable) {
      cssClass += " hoverable";
    }

    return cssClass;
  }

}
