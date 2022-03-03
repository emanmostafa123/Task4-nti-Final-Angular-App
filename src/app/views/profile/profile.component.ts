import { Component, OnInit } from '@angular/core';
import { Reporters } from 'src/app/interfaces/reportersinterface';
import { ReportersService } from 'src/app/services/reporters.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  reporter:Reporters = {}
  constructor(private reporterService:ReportersService) { }
  getProfile(){
    this.reporterService.getProfile().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.reporter = res
      },
      error:(httpError:any)=>{
        console.log(httpError)
      }
    })
  }

  ngOnInit(): void {
    this.getProfile()
  }

}
