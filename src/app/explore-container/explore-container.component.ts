import { Component, OnInit, Input } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

   async getGeoloc(){
       const l = await Geolocation.getCurrentPosition();
       console.log('asdfasdf' + l);
   }

}
