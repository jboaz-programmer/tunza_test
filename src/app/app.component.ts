import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tunza_pr';
  constructor(private router: Router){}
  ngOnInit(){
  }
  openSeries(){
    this.router.navigate(['series'])
  }
  openMovies(){
    this.router.navigate(['movies'])
  }
}

