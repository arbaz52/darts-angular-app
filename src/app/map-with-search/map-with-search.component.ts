import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MapService } from '../map.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-map-with-search',
  templateUrl: './map-with-search.component.html',
  styleUrls: ['./map-with-search.component.css']
})
export class MapWithSearchComponent implements OnInit {
  @Input() latitude: number = 33.651592
  @Input() longitude: number = 73.156456

  @Input() zoom: number = 16


  @Output() locationSelected = new EventEmitter<{}>();

  query: string = ""
  results = []

  search = () => {
    this.toaster.info("Searching for locations")
    this.mapService.search(this.query).subscribe((data:any) => {
      if(data.err){
        this.toaster.err(data.err)
      }else{
        if(data.locations.results.length > 0){
          this.results = data.locations.results
        }else{
          this.toaster.err("No location found!")
        }
      }
    }, (err: any) => {
      this.toaster.err(err)
    })
  }

  selectLocation = (index) => {
    console.log(index, this.results)
    if(index < this.results.length){
      let location: {latitude: number, longitude: number} = {
        latitude: this.results[index].geometry.lat,
        longitude: this.results[index].geometry.lng
      }
      this.locationSelected.emit(location)

      this.latitude = location.latitude;
      this.longitude = location.longitude;


      this.results = []
    }else{
      this.toaster.err("Invalid selection!")
    }
  }

  choseThisLocation = (e) => {
    console.log(e)
    let location: {latitude: number, longitude: number} = {
      latitude: e.coords.lat,
      longitude: e.coords.lng
    }
    this.locationSelected.emit(location)
    this.results = []


    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }
  constructor(private mapService: MapService, private toaster: ToasterService) { }

  ngOnInit() {
  }

}
