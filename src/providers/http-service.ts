import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs'


@Injectable()
export class HttpService {
  baseUrl : String;

  constructor(public http: Http) {
    this.baseUrl = 'assets/data/';
  }
  get(url : string,params?: Object){
     var baseUrl = "http://nikhtto.in/api/";
     return this.http.get(this.baseUrl+url+"").map(res => res.json());
   }
  post(url : string,params?:any){
    // need cross origin plugin to work
    var baseUrl = "http://nikhtto.in/api/";
    let data = new URLSearchParams();
    data.append('data', params.data);
    params = {"name":"ankita"};
     return this.http.post(baseUrl+url+'',data ).map(res => res.json());
  
   }
}
