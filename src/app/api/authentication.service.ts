import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = 'https://stage.blendedsense.com/api/login';
  url1 = 'https://stage.blendedsense.com/api/users/events';
  url2 = 'https://stage.blendedsense.com/api/users/dashboard'

  list = 'https://stage.blendedsense.com/api/sweepblocks/list';
  delete = 'https://stage.blendedsense.com/api/sweepblocks/delete';

  constructor(private http: HttpClient,private router:Router) { }

  getUser(user: any) {
    console.log(user)
    return this.http.post(this.url, user);
  }


  getData() {
    let params = new HttpParams();
    params = params.set('businessId', '722');
    return this.http.get(this.url1, { params: params });
  }

  deleteSweep(id:Number):Observable<any>{
    const token=localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization','Bearer '+ token)
    const headers ={headers :header}
    return this.http.delete(this.delete+"/"+id,headers)
  }

  getTeamData() {
    return this.http.get(this.url2)
  }
  
  getlistData() {
    return this.http.get(this.list)
  }

}
