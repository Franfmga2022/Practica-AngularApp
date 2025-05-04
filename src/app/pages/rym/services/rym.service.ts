import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rym, Ryms } from '../interfaces/ryms';

@Injectable({
  providedIn: 'root'
})
export class RymService {
  private apiURLBase:string ='https://rickandmortyapi.com/api/character/';
  private next: string | null = null;
  private previous: string | null = null;

  constructor(
    private http: HttpClient
  ) { }

  getRyms(url:string = this.apiURLBase): Observable<Ryms>{
    return this.http.get<Ryms>(url);
  }

  getrym(termino: string | number): Observable<Rym>{
    return this.http.get<Rym>(`${this.apiURLBase}${termino}`);
  }

  getRymsByName(termino: string): Observable<Ryms> {
    const url = `https://rickandmortyapi.com/api/character/?name=${termino}`;
    return this.http.get<Ryms>(url);
  }

  set nextURL(url:string | null){
    this.next = url;
  }

  set previousURL(url:string | null){
    this.previous = url;
  }

  get nextURL():string | null{
    return this.next;
  }

  get previousURL():string | null{
    return this.previous;
  }

}