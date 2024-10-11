import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  private apiURL:string = "http://localhost:5000/friends";

  constructor(private http:HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get(this.apiURL);
  };

  getUniquePost(id:string): Observable<any>{
    return this.http.get(`${this.apiURL}/${id}`)
  };

  createPost(postingData:{ first_name:string, last_name:string }): Observable<any>{
    return this.http.post(this.apiURL, postingData);
  };

  updatePost(updatingData:{ first_name:string, last_name:string }, id:string): Observable<any>{
    return this.http.put(`${this.apiURL}/${id}`, updatingData);
  };

  deletePost(id:string): Observable<any>{
    return this.http.delete(`${this.apiURL}/${id}`);
  };
}
