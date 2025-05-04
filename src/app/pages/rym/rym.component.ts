import { Component, OnInit } from '@angular/core';
import { Card2Component } from './card2/card2.component';
import { Ryms } from './interfaces/ryms';
import { RymService } from './services/rym.service';
import { Paginacion2Component } from './paginacion2/paginacion2.component';
import { Search2Component } from './search2/search2.component';

@Component({
  selector: 'app-rym',
  standalone: true,
  imports: [Card2Component, Paginacion2Component, Search2Component],
  templateUrl: './rym.component.html',
  styleUrl: './rym.component.css'
})
export class RymComponent implements OnInit{
  ryms: Ryms | undefined;

  constructor(
    private _srvRym: RymService
  ){ }

  ngOnInit(): void {
    this._srvRym.getRyms().subscribe((rymsAll) => {
      if (rymsAll?.results && Array.isArray(rymsAll.results)) {
        this.ryms = rymsAll;
        console.log(this.ryms);
      } else {
        console.error('Error: results no es un array válido.', rymsAll);
      }
      this._srvRym.nextURL = rymsAll.info.next;
      this._srvRym.previousURL = rymsAll.info.prev;
    });
  }

  setNewRym(rymsNews:Ryms):void{
    this.ryms = rymsNews;
  }

  searchRym(termino: string): void {
    if (termino) {
      if (!isNaN(Number(termino))) {
        // Buscar por ID (cuando es número)
        this._srvRym.getrym(termino).subscribe((rym) => {
          const ryms: Ryms = {
            info: {
              count: 1,
              pages: 1,
              next: '',
              prev: null
            },
            results: [rym]
          };
          this.ryms = ryms;
          //Deshabilito el boton next y previous
          this._srvRym.nextURL = null;
          this._srvRym.previousURL = null;

        });
      } else {
        // Buscar por nombre (cuando es texto)
        this._srvRym.getRymsByName(termino).subscribe((rymsAll) => {
          this.ryms = rymsAll;

          this._srvRym.nextURL = rymsAll.info.next;
          this._srvRym.previousURL = rymsAll.info.prev;
        });
      }
    } else {
      // Si está vacío el término, reiniciar la vista
      this.ngOnInit();
    }
  }

}
