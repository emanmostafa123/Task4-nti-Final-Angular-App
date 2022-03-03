import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interfaces/newsinterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  news:News = {}
  constructor(private newsService:NewsService,private route:ActivatedRoute,private router:Router) { }

  id:string = this.route.snapshot.params['id']
  getSingleNews(){
    this.newsService.getSingleNews(this.id).subscribe({
      next:(res:any)=>{
        this.news = res
      }
    })
  }

  updatenews(news:any){
    this.newsService.updatenews(this.id,news).subscribe({
      next:()=>{
        this.router.navigateByUrl('shownews')
      }
    })
  }
  ngOnInit(): void {
    this.getSingleNews()
  }

}
