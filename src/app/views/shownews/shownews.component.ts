import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/newsinterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-shownews',
  templateUrl: './shownews.component.html',
  styleUrls: ['./shownews.component.css']
})
export class ShownewsComponent implements OnInit {


  news:News[] = []
  constructor(private newsService:NewsService) { }

  getnews(){
    this.newsService.getnews().subscribe({
      next:(res:any)=>{
        this.news=res
      },
      error:(httpError:any)=>{
        console.log(httpError)
      }
    })
  }
  deletnews(id:any,i:number){
    this.newsService.deletenews(id).subscribe({
      next:()=>{
        this.news.splice(i,1)
      }
    })
  }

  ngOnInit(): void {
    this.getnews()
  }

}
