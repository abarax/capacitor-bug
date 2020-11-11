import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

   private geoloc;

   constructor() {

   }

   ngOnInit() {
   }

   async getGeoloc(){
       const l = await Geolocation.getCurrentPosition();
       console.log('asdfasdf' + l);
   }

}
