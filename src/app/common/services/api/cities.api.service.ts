import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const OVERPASS_API = 'https://www.overpass-api.de/api/interpreter';

@Injectable({
  providedIn: 'root'
})
export class CitiesAPI {
  constructor(
    private http: HttpClient
  ) { }

  public getCities(): Observable<any> {
    const overpassQuery =
      [
        `[out:json][timeout:60];`,
        `area["boundary"~"administrative"]["name"~"Berlin"];`,
        `node(area)["amenity"~"school"];`,
        `out;`
      ].join('');

    return this.http.get(OVERPASS_API, { params: { data: overpassQuery } });
  }
}