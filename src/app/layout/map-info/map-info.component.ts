import { Component, OnInit } from '@angular/core';
declare var ol: any;
@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.scss']
})
export class MapInfoComponent implements OnInit {

  latitude = 18.5204;
  longitude = 73.8567;

  map: any;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;'
    });


    this.map = new ol.Map({
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([mousePositionControl]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([73.8567, 18.5204]),
        zoom: 8
      })
    });

    this.map.on('click', function (args) {
      console.log(args.coordinate);
      // tslint:disable-next-line:prefer-const
      let lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
      console.log(lonlat);

      // tslint:disable-next-line:prefer-const
      let lon = lonlat[0];
      // tslint:disable-next-line:prefer-const
      let lat = lonlat[1];
      alert(`lat: ${lat} long: ${lon}`);
    });
  }

}
