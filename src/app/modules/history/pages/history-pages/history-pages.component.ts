import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { TrackModel } from '../../../../core/models/tracks.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-pages',
  templateUrl: './history-pages.component.html',
  styleUrls: ['./history-pages.component.css']
})
export class HistoryPagesComponent implements OnInit {
  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
   this.listResults$ = this.searchService.searchTracks$(event)
      
  }

}
