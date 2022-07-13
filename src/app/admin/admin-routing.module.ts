import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MoviesComponent } from '../movies/movies.component';
import { SeriesComponent } from '../series/series.component';

const routes: Routes = [
  {   path: 'series',   component: SeriesComponent   },
  {   path: 'movies',   component: MoviesComponent   },
  {   path: 'home',   component: HomeComponent   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
