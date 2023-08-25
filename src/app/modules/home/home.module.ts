import { NgModule } from '@angular/core';

import { NgxMasonryModule } from 'ngx-masonry';

import { HomeComponent } from './page/home.component';
import { ProjectItemComponent } from './page/project-item/project-item.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { MatCardModule } from '@angular/material/card';

import { HomeRoutingModule } from './home.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ProjectItemComponent, ProjectDetailsComponent],
  imports: [SharedModule, NgxMasonryModule ,HomeRoutingModule ,
    MatCardModule],
  exports: [],
  providers: []
})
export class HomeModule {}
