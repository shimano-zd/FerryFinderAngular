import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferry-finder-title',
  templateUrl: './ferry-finder-title.component.html',
  styleUrls: ['./ferry-finder-title.component.css']
})
export class FerryFinderTitleComponent implements OnInit {

  constructor() { }

  public FerryFinderTitleText: string;
  public FerryFinderSubtitleText: string;

  ngOnInit(): void {
    this.FerryFinderTitleText = 'FerryFinder';
    this.FerryFinderSubtitleText = ' Search and find ferry schedule in local ports';
  }

}
