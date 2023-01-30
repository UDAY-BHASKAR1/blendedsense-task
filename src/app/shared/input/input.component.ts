import { Component,Input } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() type='';
  @Input() minlength='';
  @Input() maxlength='';
  @Input() placeholder='';
  @Input() formControlName='';
  @Input() error='';
  @Input() formGroup:FormGroup;


  constructor(){}

  ngOnInit():void{}
}

