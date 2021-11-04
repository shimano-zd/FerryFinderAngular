import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortDetails } from '../../app/components/panel/portDetails.component';
import { ImagesService } from '../../app/services/images.service';
import { PanelService } from '../../app/services/panel.service';
import { PanelParameters } from '../../model/PanelParameters';
import { PortDto } from '../../model/PortDto';

@Component({
  selector: 'Schedule',
  templateUrl: './Schedule.html',
  styleUrls: ['./Schedule.css']
})

export class Schedule implements OnInit {

  public ports: PortDto[];
  public filteredPorts: PortDto[];
  public title: string;
  public dataLoading: boolean;

  constructor(private images: ImagesService, private http: HttpClient, private panelService: PanelService, private router: Router, private route: ActivatedRoute) {
    this.title = "Search ports";
    this.dataLoading = true;
  }

  ngOnInit(): void {
    let requestUrl = "https://www2.jadrolinija.hr/port-timetable/api/luke";
    this.http.get<PortDto[]>(requestUrl).subscribe((ports: PortDto[]) => {

      for (let port of ports) {
        port.OnClick = () => {
          this.router.navigate(["port/" + port.PostajaOznaka], {relativeTo : this.route });
        }
      }

      this.ports = ports;
      this.filteredPorts = ports.slice();
      this.dataLoading = false;
    });
  }

  filterPorts(searchQuery: string): void {
    console.log(searchQuery);
    if (searchQuery)
      this.filteredPorts = this.ports.filter(x => x.PostajaNaziv.toLowerCase().includes(searchQuery.toLowerCase()));
    else
      this.filteredPorts = this.ports.slice();
  }

}
