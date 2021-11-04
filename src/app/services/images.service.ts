import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private readonly base: string;

  public readonly ferry: string;
  public readonly schedule: string;
  public readonly close: string;
  public readonly arrowLeft: string;
  public readonly arrowRight: string;

  constructor() {

    this.base = "assets/images/";
    this.ferry = this.base + "ship-solid.svg";
    this.schedule = this.base + "calendar-alt-solid.svg";
    this.close = this.base + "times-solid.svg";
    this.arrowLeft = this.base + "arrow-left-solid.svg";
    this.arrowRight = this.base + "arrow-right-solid.svg";
  }

  public getFerryImage(imagePath: string): string {

    return this.base + imagePath + ".jpg";

  }


}
