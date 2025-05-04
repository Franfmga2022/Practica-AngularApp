import { DatePipe, isPlatformBrowser, NgFor, TitleCasePipe } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { Rym, Ryms } from '../interfaces/ryms';
import { HttpClient } from '@angular/common/http';  // Se añadió la importación de HttpClient

@Component({
  selector: 'rym-modal',
  standalone: true,
  imports: [NgFor, TitleCasePipe, DatePipe],
  templateUrl: './modal2.component.html',
  styles: ``,
})
export class Modal2Component {
  @Input() public ryms: Ryms = {
    info: {
      count: 0,
      pages: 0,
      next: '',
      prev: null,
    },
    results: [
      {
        id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        origin: {
          name: '',
          url: '',
        },
        location: {
          name: '',
          url: '',
        },
        image: '',
        episode: [],
        url: '',
        created: new Date(),
      },
    ],
  };

  public rym: Rym = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: new Date(),
  };

  // Nuevo arreglo para almacenar los detalles de los episodios
  public episodeDetails: any[] = [];

  private bootstrapModal: any;
  @ViewChild('modalElement') public modalElement!: ElementRef;

  // Se añadió HttpClient al constructor
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeModal();
    }
  }

  initializeModal(): void {
    import('bootstrap').then((bootstrap) => {
      this.bootstrapModal = new bootstrap.Modal(this.modalElement.nativeElement);
    });
  }

  // Modificación en el método open()
  open(rym: Rym): void {
    this.rym = {
      ...rym,
      created: new Date(rym.created),
    };

    this.episodeDetails = []; // Limpiar episodios anteriores

    // Obtener los IDs de los episodios de la URL
    const episodeIds = this.rym.episode.map((url) => url.split('/').pop());
    const joinedIds = episodeIds.join(',');

    // Realizar la solicitud HTTP para obtener los detalles de los episodios
    this.http
      .get(`https://rickandmortyapi.com/api/episode/${joinedIds}`)
      .subscribe((data: any) => {
        this.episodeDetails = Array.isArray(data) ? data : [data];  // Manejar respuesta en array
      });

    if (isPlatformBrowser(this.platformId)) {
      if (this.bootstrapModal) {
        this.bootstrapModal.show();
      } else {
        this.initializeModal();
        setTimeout(() => {
          this.bootstrapModal.show();
        }, 0);
      }
    }
  }

  close(): void {
    this.bootstrapModal.hide();
  }
}
