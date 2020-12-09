import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CastsService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url = 'api/casts/';
    return this.http.get(url);

  }
}
