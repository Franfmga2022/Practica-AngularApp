import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pokemon-search',
  standalone: true,
  imports: [],
  template: `
    <div class="col-12">
      <div class="input-group mb-3">
        <input
            #txtSearch
            type="text"
            class="form-control"
            placeholder="Escribe el nombre del Pokemon"
            aria-label="Escribe el nombre del Pokemon"
            (keydown.enter)="searchPokemon(txtSearch.value)"
            aria-describedby="button-addon2"
            />
        <button
          class="btn btn-outline-secondary"
          type="button"
          (click)="searchPokemon(txtSearch.value)"
          id="button-addon2"
        >
          <i class=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
              /></svg>
            </i>
        </button>
      </div>
    </div>
  `,
  styles: [``],
})
export class SearchComponent {
  @Output() public eventSearch = new EventEmitter<string>();

  searchPokemon(termino: string | number): void {
    const termSearch = termino.toString().trim();
    //if (termSearch.length === 0) {
      //return;
    //}
    this.eventSearch.emit(termSearch);
  }
}
