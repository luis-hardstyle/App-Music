import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './componets/side-bar/side-bar.component';
import { MediaPlayerComponent } from './componets/media-player/media-player.component';
import { HeaderUserComponent } from './componets/header-user/header-user.component';
import { CardPlayerComponent } from './componets/card-player/card-player.component';
import { SectionGenericComponent } from './componets/section-generic/section-generic.component';
import { PlayListBodyComponent } from './componets/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './componets/play-list-header/play-list-header.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipes/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    OrderListPipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective


  ]
})
export class SharedModule { }
