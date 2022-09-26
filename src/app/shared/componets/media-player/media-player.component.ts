import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import {  TrackModel } from '../../../core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

mockCover!: TrackModel;
@ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused';
  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {

    const observer1$ = this.multimediaService.playerStatus$
    .subscribe(status => this.state = status);

    this.listObservers$ = [observer1$]


    // const observable1$ = this.multimediaService.myObservable1$
    //   .subscribe(
    //     (responseOk)=>{
    //       console.log('La respuesta llega');
    //   },
    //     (responseFail)=>{
    //      console.log('La respuesta no llega');
    //   }
    //   )
    //************************************* */
    // const observer1$: Subscription = this.multimediaService.callback.subscribe(
    //   (response: TrackModel) => {
    //     console.log('Recibiendo cancion...',response);
    //   }
    // )
    // this.listObservers$ =[observer1$];
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
      console.log('destruyendo');
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width
    console.log(`Click(x): ${percentageFromX}`);
    this.multimediaService.seekAudio(percentageFromX)

  }

}
