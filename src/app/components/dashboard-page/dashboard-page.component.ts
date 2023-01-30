import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AuthenticationService } from 'src/app/api/authentication.service';
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { faImage} from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';






@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  faCoffee = faHouse;
  faBusinessTime=faBriefcase;
  faImage=faImage;
  faCalendar=faCalendar;
  faGear=faGear;
  faArrowUpFromBracket=faArrowUpFromBracket;
  faFileLines=faFileLines;
  faHouseChimneyWindow=faHouseChimneyWindow;
  faBars=faBars;
  faBell=faBell;
  faAngleDown=faAngleDown;
  
  items:any;
  data1:any;
  data:any;
  overlayVisible: boolean = false;


   
  constructor(private userData: AuthenticationService, private router: Router,) { }


  ngOnInit() {
    
  }
 
 
  Logout(): void {
   
    localStorage.clear();
    this.router.navigate(['/login']);
   }
   toggle() {
    this.overlayVisible = !this.overlayVisible;
}

changeSideBarScreenWidthStatus:boolean=false;
minimizeSideBarStatus(minimizeSideBar:boolean)
{
    //  console.log(minimizeSideBar);
      
    this.changeSideBarScreenWidthStatus = minimizeSideBar;
    
} 
}
