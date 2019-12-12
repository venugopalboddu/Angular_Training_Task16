import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht: HttpClient) { }
  ge() {
    return this.ht.get('http://localhost:3000/posts');
  }

}
