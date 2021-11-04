import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FerryDto } from '../model/FerryDto';
import { FerryDataContainerService } from './services/ferry-data-container.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public dataLoaded: boolean;
  public panelOpened: boolean;

  constructor(private ferryContainerService: FerryDataContainerService, private httpClient: HttpClient) {
   
  }

  ngOnInit(): void {
    this.dataLoaded = false;

    this.httpClient.get("assets/data/ferries.json").subscribe((data:FerryDto[]) => {
      this.ferryContainerService.loadFerries(data);
      this.dataLoaded = true;
    });
  }
}
