/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})


export class OrderDetailComponent implements OnInit {
  
  @ViewChild('gmap') gmapElement: any;
  responseData:any;
  map: google.maps.Map;
  constructor(public route : ActivatedRoute, public userservice : UserService ) { }

  ngOnInit() {
    let id_order = this.route.snapshot.paramMap.get('id');
    this.userservice.getData("order_detail_show/" + id_order).subscribe(
      res => {
        this.responseData = res
          console.log(res)
          console.log(this.responseData['location'])
          var mapOptions = {
            center: new google.maps.LatLng(this.responseData['location'][0]['latitude'], this.responseData['location'][0]['longitude']),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.map = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);
          var arr = this.responseData['location'];
          var cords = []
          for (var i = 0; i < arr.length; i++) {
            cords.push(new google.maps.LatLng(parseFloat(this.responseData['location'][i]['latitude']), parseFloat(this.responseData['location'][i]['longitude'])));
          } 
          new google.maps.Polygon({
            paths: cords,
            map: this.map,
            strokeColor: '#000',
            strokeOpacity: 0.8,
            strokeWeight: 6,
            fillColor: 'green',
            fillOpacity: 0.35,
          });
          cords = [];
      },
      err => console.log(err)
    );
   
  }

}
