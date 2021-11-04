
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[panelContent]'
})

export class PanelContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
