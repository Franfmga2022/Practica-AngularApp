import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'rym-search2',
    standalone: true,
    imports:[],
    template: `
    <div class="col-12">
    <div class="input-group mb-3">
      <input 
        #txtSearch2
        type="text" 
        class="form-control" 
        placeholder="Escribe el nombre del personaje" 
        aria-label="Escribe el nombre del personaje" 
        (keydown.enter)="searchRym(txtSearch2.value)"
        aria-describedby="button-addon2"
      >

      <button 
        class="btn btn-outline-secondary" 
        type="button" 
        (click)="searchRym(txtSearch2.value)"
        id="button-addon2"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
    </button>

    </div>
    </div>
    `,
    styles: [`
    `]
})
export class Search2Component{
    @Output() public eventSearch2 = new EventEmitter<string>();

    searchRym(termino:string | number):void{
        const termSearch = termino.toString().trim();
        //if(termSearch.length === 0 ){
        //   return;
        //}
        this.eventSearch2.emit(termSearch);
    }
}