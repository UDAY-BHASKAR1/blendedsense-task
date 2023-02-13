import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from 'src/app/api/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-sweepblocks',
  templateUrl: './sweepblocks.component.html',
  styleUrls: ['./sweepblocks.component.css'],
})
export class SweepblocksComponent {
 
  selectedSweep:any;
  faSearch=faSearch;
  overlayVisible: boolean = false;
  customers: any;
  data: Array<any>;
  items: MenuItem[];
  first = 0;
  cols: any[] = [];
  rows = 10;
  value3: any;
  deleteid:Number;
  displayBasic: boolean;
  displayBasic2: boolean;
  displayModal: boolean;
  visible:boolean;
  id = null;
  globalId:Number;
  Loader:boolean=false;
  login:FormGroup;
  sweepType="";
  sweepName = "";
  DurationInMinutes:Number;
  sweepTypeoptions:Array<any>;
 
  testForm= new FormGroup({
    mobiles:new FormArray(
      [
          new FormControl(null,Validators.required),
         
      ]
    )
  })

  Add(){
    let mobiles=this.testForm.get('mobiles') as FormArray
    console.log(mobiles);
    mobiles.push(new FormControl(null,Validators.required))
  }

  remove(i:number){
     let mobiles=this.testForm.get('mobiles') as FormArray;
     mobiles.removeAt(i)
     console.log(mobiles,i)
  }
  
 options=[{type:'content capture'},{name:'commute'},{name:'meeting'}]

  
  constructor(
    private http: AuthenticationService,
   
    private toastr:ToastrService,
    private fb: FormBuilder
  ) {
   
    this.login = this.fb.group({
      title: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      typeName:['',[Validators.required]]
    });

    this.sweepTypeoptions = [
      {name: 'Content Capture'},
      {name: 'Meeting'},
      {name: 'Commute'},
      
  ];
  }

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

showBasicDialog2(data) {
  console.log(data);
  
  this.displayBasic2 = true;
  this.login.patchValue({
    title:data.name,
    duration:data.durationInMinutes,
    typeName:data.sweepBlockTypeId

  })
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


}
