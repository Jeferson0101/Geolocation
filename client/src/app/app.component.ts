/// <reference types="@types/googlemaps" />
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild('gmap', {static: true}) gmapElement: ElementRef;
  // public map: google.maps.Map;
  // public infoWindow: any;
  constructor(private http: HttpClient){

  }
  public ngOnInit() {
    // let mapProp = {
    //   center: new google.maps.LatLng(18.5791, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };

    // this.infoWindow = new google.maps.InfoWindow();

    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    // this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(this.gmapElement.nativeElement);
    this.getData();
  }

  public getData(): void {
    
    this.http.get('http://localhost:3300').pipe(
      take(1),
    ).subscribe((data) =>{
      console.log(data);
    }, error => {console.log(error)})
  }


  // public onClick() {
  //   // Try HTML5 geolocation.
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position: any) => {
  //         const pos = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         };

  //         this.infoWindow.setPosition(pos);
  //         this.infoWindow.setContent("Location found.");
  //         this.infoWindow.open(this.map);
  //         this.map.setCenter(pos);
  //       },
  //       () => {
  //         this.handleLocationError(true, this.infoWindow, this.map.getCenter());
  //       }
  //     );
  //   } else {
  //     // Browser doesn't support Geolocation
  //     this.handleLocationError(false, this.infoWindow, this.map.getCenter());
  //   }
  // }

  // public handleLocationError(
  //   browserHasGeolocation: boolean,
  //   infoWindow: google.maps.InfoWindow,
  //   pos: google.maps.LatLng
  // ) {
  //   infoWindow.setPosition(pos);
  //   infoWindow.setContent(
  //     browserHasGeolocation
  //       ? "Error: The Geolocation service failed."
  //       : "Error: Your browser doesn't support geolocation."
  //   );
  //   infoWindow.open(this.map);
  // }


}
