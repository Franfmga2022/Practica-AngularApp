import { Component, Output, EventEmitter } from '@angular/core';
import { RymService } from '../services/rym.service';
import { NgClass } from '@angular/common';
import { Ryms } from '../interfaces/ryms';

@Component({
  selector: 'rym-paginacion2',
  standalone: true,
  imports: [NgClass],
  templateUrl: './paginacion2.component.html',
  styleUrl: './paginacion2.component.css'
})
export class Paginacion2Component {
  @Output() public eventNewRyms = new EventEmitter<Ryms>();
  constructor(
    private _srvRym: RymService
  ){}

  get nextURL():string | null{
    return this._srvRym.nextURL;
  }

  get previousURL():string | null{
    return this._srvRym.previousURL;
  }

  loadRyms(url: string) {
    this._srvRym.getRyms(url).subscribe((rymsAll) => {
      this._srvRym.nextURL = rymsAll.info.next;
      this._srvRym.previousURL = rymsAll.info.prev;
      this.eventNewRyms.emit(rymsAll); 
    });
  }

}
