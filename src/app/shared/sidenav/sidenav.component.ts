import { Component,OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  minimizeSidebarStatus = false;
  @Output() minimizeSideBar = new EventEmitter<boolean>();

  minimizeSidebar() {
    this.minimizeSidebarStatus = !this.minimizeSidebarStatus;
      this.minimizeSideBar.emit(this.minimizeSidebarStatus);
  }
}
