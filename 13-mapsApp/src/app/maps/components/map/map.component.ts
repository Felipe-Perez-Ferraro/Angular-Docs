import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit {
  private map!: L.Map;
  private userMarker: L.Marker | undefined;

  ngOnInit(): void {
    this.initMap();
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords: [number, number] = [
          position.coords.latitude,
          position.coords.longitude,
        ];

        if (this.userMarker) {
          this.userMarker = L.marker(coords);
        } else {
          this.userMarker = L.marker(coords, { draggable: true })
            .addTo(this.map)
            .bindPopup('Localización actual')
            .openPopup();
        }
        this.dragEvent();
        this.map.setView(coords, 19);
      });
    } else {
      throw Error('No soportado por el naveador');
    }
  }

  private initMap() {
    this.map = L.map('map').setView([-34.6333, -58.6], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  private dragEvent(): L.Marker | undefined {
    return this.userMarker?.on('dragend', (e) => {
      const marker = e.target;
      const pos = marker.getLatLng();
      marker.setLatLng(pos).openPopup();
      this.map.setView(pos, 19);

      console.log(`Te moviste a: ${pos.lat} - ${pos.lng}`);
    });
  }
}
