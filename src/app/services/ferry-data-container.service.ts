import { Injectable } from '@angular/core';
import { FerryDto } from '../../model/FerryDto';

@Injectable({
  providedIn: 'root'
})
export class FerryDataContainerService {

  private ferries: FerryDto[];
  public ferriesLoaded: boolean;

  constructor() {

  }

  public loadFerries(ferries: FerryDto[]): void {
    this.ferries = ferries;
    this.ferriesLoaded = true;
  }

  public getFerries(): FerryDto[] {
    return this.ferries;
  }
}
