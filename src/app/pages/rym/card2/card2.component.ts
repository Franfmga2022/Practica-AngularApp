import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Rym, Ryms } from '../interfaces/ryms';
import { NgFor, NgIf } from '@angular/common';
import { Modal2Component } from '../modal2/modal2.component';

@Component({
  selector: 'rym-card2',
  imports: [NgIf, NgFor, Modal2Component],
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.css'
})
export class Card2Component implements OnChanges {
  @Input() public rymsAll: Ryms | undefined;
  @ViewChild(Modal2Component) public modal!: Modal2Component;
  imageLoaded: boolean = false;
  selectedRym!: Rym;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['rymsAll']){
      this.imageLoaded= false;
    }
  }

  openModal(rym:Rym): void{
    if(this.modal){
      this.modal.open(rym);
    }
  }
   
}
