import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private clicked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getJSON()
  }
  openSeries(){
    this.router.navigate(['series'])
  }
 

filej:any
entries:any

  getJSON(){
    this.http.get('https://raw.githubusercontent.com/amawalla/js-coding-challenge/master/feed/sample.json',{}).subscribe(
      res=>{
        this.filej = res;
        this.entries = this.filej.entries;
        console.log(this.filej);
      }
    )

  }
  openMovies(){
    let navigationEtras: NavigationExtras = {
      state: {
        movlist : this.filej
      }
    }
    this.router.navigate(['movies'], navigationEtras);
  }

  clickError(){
    
    
  }
}
