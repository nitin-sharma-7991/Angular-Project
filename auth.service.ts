import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  url="http://localhost:3000/users/login";
  constructor(private http:HttpClient){}

  login(data :any):Observable<any>
  {
    return this.http.post(this.url,data);
  }
}