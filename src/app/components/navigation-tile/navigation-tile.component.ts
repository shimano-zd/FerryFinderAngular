import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-tile',
  templateUrl: './navigation-tile.component.html',
  styleUrls: ['./navigation-tile.component.css']
})
export class NavigationTileComponent implements OnInit {

  @Input() title: string;
  @Input() imgSrc: string;
  @Input() route: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleClick() {
    this.router.navigate([this.route]);
  }

}
