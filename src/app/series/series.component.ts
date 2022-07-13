import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  data: any
  filej:any
entries:any
  constructor( private http: HttpClient,private route: ActivatedRoute, private router: Router) {
  
  }

 ngOnInit(): void {
   this. getJSON()
 }
 objImg: any
 objTitle: any
 post:any
 releaseYear: any

 programType:any
 imageArr: any = [];
 newarrSorted:any
 getJSON(){
   this.http.get('https://raw.githubusercontent.com/amawalla/js-coding-challenge/master/feed/sample.json',{}).subscribe(
     res=>{
       this.filej = res;
       this.entries = this.filej.entries;
       for(let i=0; i<=this.entries.length; i++){
        this.objTitle = this.entries[i].title;
        this.objImg = this.entries[i].images;
        this.releaseYear = this.entries[i].releaseYear;

        this.post = this.objImg['Poster Art'].url
        this.programType = this.entries[i].programType;
        if (this.programType == 'series' && this.releaseYear >= 2010){
          this.imageArr.push({img:this.post, title:this.objTitle});
          this.newarrSorted = this.imageArr.sort((a:any,b:any) => a.title + b.title);
          this.newarrSorted.sort((a:any, b:any) => (a.title < b.title ? -1 : 1));

      }
      }
          console.log(this.imageArr);

     }
   )

 }
  
}
