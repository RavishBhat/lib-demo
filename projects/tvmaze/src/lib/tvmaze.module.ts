import { NgModule } from '@angular/core';
import { TvmazeComponent } from './tvmaze.component';
import { PosterComponent } from './poster/poster.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TvmazeComponent, PosterComponent],
  imports: [HttpClientModule, CommonModule
  ],
  exports: [TvmazeComponent, PosterComponent]
})
export class TvmazeModule { }
