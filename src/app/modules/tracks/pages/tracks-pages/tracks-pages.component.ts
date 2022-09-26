import { Component, OnInit } from '@angular/core';
import { TrackModel } from '../../../../core/models/tracks.model';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-pages',
  templateUrl: './tracks-pages.component.html',
  styleUrls: ['./tracks-pages.component.css']
})
export class TracksPagesComponent implements OnInit {
  tracksTrending:Array<TrackModel> = [  ]
  tracksRandom:Array<TrackModel> = [  ]
  listObservers$: Array<Subscription> = []

  constructor(private trackService : TrackService) { }

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
 
  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    

    // this.trackService.getAllTracks$().toPromise()
    // .then(res => {})
    // .catch(err => {})
   
  }

  loadDataRandom(): void {
     this.trackService.getAllRandom$()
       .subscribe((response: TrackModel[])=>{
        this.tracksRandom = response
   })

  }

  ngOnDestroy(): void {
   
  }

}
