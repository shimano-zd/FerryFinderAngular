import { Component, Input, OnInit } from "@angular/core";
import { FerryDto } from "../../../model/FerryDto";
import { ImagesService } from "../../services/images.service";
import { PanelService } from "../../services/panel.service";
import { DynamicComponent } from "./dynamicComponent";

@Component({
  selector: 'app-ferry-details',
  templateUrl: './ferryDetails.component.html',
  styleUrls: ['./ferryDetails.component.css']
})

export class FerryDetails implements DynamicComponent, OnInit {

  @Input() ActivationParameters: any;
  @Input() SetTitle: (title: string) => void;
  private ferry: FerryDto;

  constructor(private images: ImagesService, private panelService: PanelService) {

  }

  ngOnInit(): void {
    if (this.ActivationParameters && this.ActivationParameters.Ferry) {
      console.log("ferry: " + this.ferry);
      this.ferry = this.ActivationParameters.Ferry;
      this.SetTitle(this.ferry.Name);
    } else {
      this.SetTitle("Not found");
    }
  }

  getFerryImage(): string {
    if (this.ferry) {
      return this.images.getFerryImage(this.ferry.Image);
    }
  }


}
