import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PanelParameters } from '../../../model/PanelParameters';
import { FerryDataContainerService } from '../../services/ferry-data-container.service';
import { ImagesService } from '../../services/images.service';
import { PanelService } from '../../services/panel.service';
import { DynamicComponent } from './dynamicComponent';
import { FerryDetails } from './ferryDetails.component';
import { PanelContentDirective } from './panelContent.directive';
import { PortDetails } from './portDetails.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  //@Input() panelParameters: PanelParameters;
  @ViewChild(PanelContentDirective) panelContent!: PanelContentDirective;
  private refererRoute: string;

  panelTitle: string;

  constructor(private panelService: PanelService, private images: ImagesService,
    private componentFactoryResolver: ComponentFactoryResolver, private route: ActivatedRoute,
    private ferryService: FerryDataContainerService, private router: Router) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.params;
    if (routeParams && routeParams.id) {
      this.refererRoute = "ferries";
      this.loadFerryIntoPanel(routeParams.id);
    } else if (routeParams && routeParams.code) {
      this.refererRoute = "schedule";
      this.loadPortIntoPanel(routeParams.code);
    }

    this.panelService.onPanelTitleChanged.subscribe((title: string) => {
      this.panelTitle = title;
    });
  }

  loadFerryIntoPanel(ferryId: number): void {

    const ferry = this.ferryService.getFerries().find(x => x.Id == ferryId);
    let panelParams = new PanelParameters();
    panelParams.Component = FerryDetails;
    panelParams.ActivationParameters = { 'Ferry': ferry };
    this.loadPanelContent(panelParams);

  }

  loadPortIntoPanel(portCode: string): void {
    let panelParams = new PanelParameters();
    panelParams.Component = PortDetails;
    panelParams.ActivationParameters = { 'PortCode': portCode };
    this.loadPanelContent(panelParams);
  }

  loadPanelContent(panelParameters: PanelParameters) {
    
    if (!panelParameters) {
      return;
    }
    
    if (panelParameters.Component) {

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(panelParameters.Component);
      const viewContainerRef = this.panelContent.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent<DynamicComponent>(componentFactory);
      componentRef.instance.ActivationParameters = panelParameters.ActivationParameters;
      componentRef.instance.SetTitle = (title) => {
        this.panelService.setPanelTitle(title);
      }
    }
  }

  closePanel(): void {
    this.router.navigate([this.refererRoute]);
  }
}
