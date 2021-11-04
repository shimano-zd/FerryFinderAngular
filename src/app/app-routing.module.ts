import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Index } from "../pages/Index/Index";
import { Ferries } from '../pages/Ferries/Ferries';
import { Schedule } from '../pages/Schedule/Schedule';
import { PagenotfoundComponent } from "../pages/Pagenotfound/pagenotfound.component";
import { PanelComponent } from "./components/panel/panel.component";


const routes: Routes = [
  {
    path: '',
    component: Index,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Index,
    pathMatch: 'full'
  },
  {
    path: 'ferries',
    component: Ferries,
    children: [
      {
        path: 'id/:id',
        component: PanelComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'schedule',
    component: Schedule,
    children: [
      {
        path: 'port/:code',
        component: PanelComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'pagenotfound', component: PagenotfoundComponent
  },
  {path: '**', redirectTo: '/pagenotfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
