import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() selectedType: string;
  @Input() TypeList: Array<any>;
  @Output() selectedItemInfo = new EventEmitter<string>();
  @Input() editable;
  @Input() optionsType:any;
  constructor() {}

  ngOnInit(): void {}

  selectedItem(itemSelected: string) {
    this.selectedItemInfo.emit(itemSelected);
  }
}
