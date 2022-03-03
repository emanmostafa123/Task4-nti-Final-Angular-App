import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  url="http://localhost:3000/"

  constructor(private http:HttpClient) { }

  addnews(news:any){
    return this.http.post(this.url + 'news',news)
  }
  getnews(){
    return this.http.get(this.url + 'news')
  }
  deletenews(id:any){
    return this.http.delete(this.url +'news/' + id)
  }
  getSingleNews(id:any){
    return this.http.get(this.url + 'news/' + id)
  }
  updatenews(id:any,news:any){
    return this.http.patch(this.url + 'news/' + id, news)
  }
}
