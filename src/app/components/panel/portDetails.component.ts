import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { FerryDto } from "../../../model/FerryDto";
import { PortDto } from "../../../model/PortDto";
import { PortVoyageDto } from "../../../model/PortVoyageDto";
import { ImagesService } from "../../services/images.service";
import { PanelService } from "../../services/panel.service";
import { DynamicComponent } from "./dynamicComponent";

@Component({
  selector: 'app-port-details',
  templateUrl: './portDetails.component.html',
  styleUrls: ['./portDetails.component.css']
})

export class PortDetails implements DynamicComponent, OnInit {

  @Input() ActivationParameters: any;
  @Input() SetTitle: (title: string) => void;
  private portCode: string;
  private loadingVoyages: boolean;
  private voyages: PortVoyageDto[];

  constructor(private http: HttpClient, private panelService: PanelService) {

  }

  ngOnInit(): void {

    if (this.ActivationParameters && this.ActivationParameters.PortCode) {
      this.loadingVoyages = true;
      this.portCode = this.ActivationParameters.PortCode;

      const requestUrl = "https://www2.jadrolinija.hr/port-timetable/api/luke/" + this.portCode + "/putovanja";
      this.http.get(requestUrl).subscribe((voyages: PortVoyageDto[]) => {
        this.voyages = voyages;
        this.SetTitle((this.voyages && this.voyages[0]) ? this.voyages[0].PostajaNaziv : "No voyages");
        this.loadingVoyages = false;
      });
    }
  }

}
