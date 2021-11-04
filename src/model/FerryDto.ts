import { ShipTypeDto } from '../model/ShipTypeDto';

export class FerryDto {
   Id: number;
   Name: string;
   Length: number;
   draft: number;
   Width: number;
   PassengerCapacity: number;
   VehicleCapacity: number;
   MaxSpeed: number;
   ShipType: ShipTypeDto;
   Image: string;
   OnClick: () => void;

}

