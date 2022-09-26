import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@code/models/tracks.model';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor( private httpClient: HttpClient) {
   
}

  /**
   * 
   * @returns Devolver todas las canciones! molonas! 🤘🤘
   */

   private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }


  /**
   * 
   * @returns Devolver todas las canciones
   */
  getAllTracks$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}: any)=>{
        return data
      })
    )
  }

  /**
   * 
   * @returns Devolver las canciones random
   */
   getAllRandom$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      mergeMap(({data}: any)=> this.skipById(data, 2)),
      // map((dataRevertida) =>{
      //   return dataRevertida.filter((track:TrackModel) => track._id !== 1)
      // })

      tap(data => console.log('*******',data)),
      catchError((err)=>{
        const {status} = err;
        console.log('Algo pasorevisame'[status]);
        return of([])
      })
    )
  }

}
