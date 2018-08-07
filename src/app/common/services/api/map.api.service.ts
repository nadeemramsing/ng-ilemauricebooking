import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const OVERPASS_API = 'https://www.overpass-api.de/api/interpreter';

@Injectable({
  providedIn: 'root'
})
export class MapAPI {
  constructor(
    private http: HttpClient
  ) { }

  public getPlaces(name?: String): Observable<any> {
    let nameCriteria = "";

    name && (nameCriteria = `["name"~"${name}", i]`);

    const overpassQuery =
      [
        `[out:json];`,
        `area["name"="Mauritius"]["type"="boundary"];`,
        `node["place"~"city|town|village"]${nameCriteria}(area);`,
        `out;`
      ].join('');

    return this.http.get(OVERPASS_API, { params: { data: overpassQuery } });
  }
}