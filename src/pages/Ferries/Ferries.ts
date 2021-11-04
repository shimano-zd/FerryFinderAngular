import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FerryDto } from 'src/model/FerryDto';
import { FerryDetails } from '../../app/components/panel/ferryDetails.component';
import { FerryDataContainerService } from '../../app/services/ferry-data-container.service';
import { ImagesService } from '../../app/services/images.service';
import { PanelService } from '../../app/services/panel.service';
import { PanelParameters } from '../../model/PanelParameters';

@Component({
  selector: 'Ferries',
  templateUrl: './Ferries.html',
  styleUrls: ['./Ferries.css']
})

export class Ferries implements OnInit {

  public title: string;
  public ferries: FerryDto[];
  public filteredFerries: FerryDto[];
  constructor(private images: ImagesService, private ferryContainerService:FerryDataContainerService, private panelService: PanelService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.title = "Search ferries";
    this.ferries = this.ferryContainerService.getFerries();
    this.filteredFerries = this.ferries.slice();

    for (let ferry of this.ferries) {
      ferry.OnClick = ()=> {
        this.router.navigate(["id/" + ferry.Id], {relativeTo: this.route});
      }
    }
    
  }


  filterFerries(searchQuery: string): void{

      if(searchQuery)
        this.filteredFerries = this.ferries.filter(x => x.Name.toLowerCase().includes(searchQuery.toLowerCase()));
      else
        this.filteredFerries = this.ferries.slice();  
  }

}
