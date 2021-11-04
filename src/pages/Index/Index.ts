import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../app/services/images.service';

@Component({
  selector: 'Index',
  templateUrl: './Index.html',
  styleUrls: ['./Index.css']
})

export class Index implements OnInit {

  constructor(private images: ImagesService) {

  }

  ngOnInit(): void {
    
  }

  onScheduleClick() {
    console.log("schedule clicked");
  }

  onFerriesClick() {
    console.log("ferries clicked");
  }

}
