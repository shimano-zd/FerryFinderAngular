import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Index } from '../pages/Index/Index';
import { Ferries } from '../pages/Ferries/Ferries';
import { Schedule } from '../pages/Schedule/Schedule';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FerryFinderTitleComponent } from './components/ferry-finder-title/ferry-finder-title.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NavigationTileComponent } from './components/navigation-tile/navigation-tile.component';
import { ListViewItemComponent } from './components/list-view-item/list-view-item.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FerryDataContainerService } from './services/ferry-data-container.service';
import { FormsModule } from '@angular/forms';
import { ListViewComponent } from './components/list-view/list-view.component';
import { PanelService } from './services/panel.service';
import { PanelComponent } from './components/panel/panel.component';
import { FerryDetails } from './components/panel/ferryDetails.component';
import { PanelContentDirective } from './components/panel/panelContent.directive';
import { ImagesService } from './services/images.service';
import { PortDetails } from './components/panel/portDetails.component';
import { VoyageDetailsComponent } from './components/voyage-details/voyage-details.component';
import { PagenotfoundComponent } from '../pages/Pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    VoyageDetailsComponent,
    AppComponent,
    Index,
    Ferries,
    Schedule,
    SearchBarComponent,
    FerryFinderTitleComponent,
    LoadingSpinnerComponent,
    NavigationTileComponent,
    ListViewItemComponent,
    NavMenuComponent,
    FooterComponent,
    ListViewComponent,
    PanelComponent,
    PanelContentDirective,
    FerryDetails,
    PortDetails,
    PagenotfoundComponent
  ],
  entryComponents: [FerryDetails, PortDetails],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [FerryDataContainerService, PanelService, ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
