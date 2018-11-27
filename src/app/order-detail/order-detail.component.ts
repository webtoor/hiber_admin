/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})


export class OrderDetailComponent implements OnInit {
  
  @ViewChild('gmap') gmapElement: any;
  
  map: google.maps.Map;
  constructor(public route : ActivatedRoute) { }

  ngOnInit() {
    let ids = this.route.snapshot.paramMap.get('id');
    console.log(ids)
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
