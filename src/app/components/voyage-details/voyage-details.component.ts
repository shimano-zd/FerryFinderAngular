import { Component, Input, OnInit } from '@angular/core';
import { PortVoyageDto } from '../../../model/PortVoyageDto';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-voyage-details',
  templateUrl: './voyage-details.component.html',
  styleUrls: ['./voyage-details.component.css']
})
export class VoyageDetailsComponent implements OnInit {

  @Input() public voyage: PortVoyageDto;
  private startTime: Date;
  private ferryType: string;
  private direction: string;
  private endPort: string;
  private isDeparture: boolean;

  constructor(private images: ImagesService) { }

  ngOnInit() {

    if (!this.voyage)
      return;

    this.isDeparture = this.voyage.IndSmjera == "-->";
    switch (this.voyage.LinijaTipOznaka) {
      case "BRL": this.ferryType = "Ship";
      case "BBL": this.ferryType = "Catamaran";
      default: this.ferryType = "Ferry";
    }
    if (this.isDeparture) {
      this.startTime = this.voyage.PolazakVrijeme;
      this.endPort = this.voyage.LukaNakon;
      this.direction = "Departure";
    } else {
      this.startTime = this.voyage.DolazakVrijeme;
      this.endPort = this.voyage.LukaPrije;
      this.direction = "Arrival";
    }

  }

}
