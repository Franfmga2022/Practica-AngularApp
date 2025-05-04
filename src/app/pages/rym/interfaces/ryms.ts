export interface Ryms {
    info: Info;
    results: Rym[];
  }
  
  export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  }

  export interface Rym {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string | Date;
}

export interface Location {
    name: string;
    url:  string;
}
