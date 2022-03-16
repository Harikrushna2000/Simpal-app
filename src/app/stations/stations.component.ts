import { Component, OnInit } from '@angular/core';
import { StationsService } from '../services/stations.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  stationsList:any;
  constructor(private stationsService:StationsService) { }

  ngOnInit(): void {
    this.stationsService.getstations().subscribe((res)=>{
      this.stationsList = res;
      console.log("stations :",res)
    },
    error=>{
      console.log(error)
    })
  }

  editData(id:any){

  }

  deleteData(id:any){
    this.stationsService.deletestations(id).subscribe((res)=>{
      console.log(res);
    },
    error=>{
      console.log(error);
    })
  }
}
