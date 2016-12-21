import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class GithubService {
  private username: string;
  private client_id: 'f7d1948da412839546f0';
  private client_secret: '49a8258ed8e6f50adb2e16bc0108e9f6e1e71087';


  constructor(private _http: Http) {
    this.username = "AhmedSalahBasha";
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'
      +this.username+'?client_id='
      +this.client_id+'&client_secret='
      +this.client_secret)
        .map(res => {
          if(res.status < 200 || res.status >= 300) {
            throw new Error('This request has failed ' + res.status);
          }else{
            return res.json()
          }
        });
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'
      +this.username+'/repos?client_id='
      +this.client_id+'&client_secret='
      +this.client_secret)
      .map(res => {
        if(res.status < 200 || res.status >= 300) {
          throw new Error('This request has failed ' + res.status);
        }else{
          return res.json();
        }
      });
  }

  updateUser(username: string){
    this.username = username;
  }

}
