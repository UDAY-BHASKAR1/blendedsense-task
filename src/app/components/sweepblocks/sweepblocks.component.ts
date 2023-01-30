import { Component } from '@angular/core';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { AuthenticationService } from 'src/app/api/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sweepblocks',
  templateUrl: './sweepblocks.component.html',
  styleUrls: ['./sweepblocks.component.css'],
})
export class SweepblocksComponent {

  faSearch=faSearch;
  overlayVisible: boolean = false;
  customers: any;
  data: any;
  items: MenuItem[];
  first = 0;
  cols: any[] = [];
  rows = 10;
  value3: any;
  deleteid:any;
  displayBasic: boolean;
  displayBasic2: boolean;
  displayModal: boolean;
  visible:boolean;
  id = null;
  globalId:any;
  Loader:boolean=false;
  
  constructor(
    private http: AuthenticationService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private toastr:ToastrService
  ) {}

  ngOnInit() {
    
    this.getSweeps();
    
  }

  
deleteSweep(){
  this.http.deleteSweep(this.globalId).subscribe((res) => {
    console.log(res, 'uday');
    this.toastr.success('Sweep block has been deleted', null, { timeOut: 2000 });
    this.getSweeps();
  });
}
 
getSweeps() {
  this.Loader = true;
    this.http.getlistData().subscribe((result) => {
      this.data = result['data'];
      this.Loader = false;
      console.log(this.data);
    });
  }

  

  showModalDialog() {
    this.displayModal = true;
  }
  
  
  deleteId(id){
    console.log(id);
    this.globalId=id
    
  }

  toggle() {
    this.overlayVisible = !this.overlayVisible;
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }
  showBasicDialog() {
    this.displayBasic = true;
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.customers
      ? this.first === this.customers.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }

  // confirm(event: Event) {
  //   this.confirmationService.confirm({
  //       target: event.target,
  //       message: 'Are you sure that you want to proceed?',
  //       icon: 'pi pi-exclamation-triangle',
  //       accept: () => {
  //           this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
  //       },
  //       reject: () => {
  //           this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
  //       }
  //   });
  // }
}
