import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/api/authentication.service';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {

  items:any;
  data1:any;
  data:any;
  Loader:boolean=false;
  constructor(private userData: AuthenticationService, private router: Router,) { }
ngOnInit(){
   this.get()
}

get(){
  this.Loader = true;
  this.userData.getData().subscribe((result) => {
    this.items = result;
    this.data = this.items.events;
    this.Loader = false;
    console.log(this.data)
  })

  this.userData.getTeamData().subscribe((res) => {
    this.items = res;
    this.data1 = this.items;
    console.log(this.data1)
  })
  
}
}
