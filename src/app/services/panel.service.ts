import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PanelParameters } from '../../model/PanelParameters';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  public onPanelTitleChanged: EventEmitter<string> = new EventEmitter<string>();
  private panelTitle: string;

  constructor() { }

  public setPanelTitle(title: string):void {
    this.panelTitle = title;
    this.onPanelTitleChanged.emit(this.panelTitle);
  }
}
