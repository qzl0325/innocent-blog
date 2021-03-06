//文章相关服务
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Config } from './config';

@Injectable()
export class PostService {

  constructor(
    private http: Http
  ) { }


  getPostList(currentPage, pageSize) {
    let url = `${Config.apiUserRoot}postlist?page=${currentPage}&size=${pageSize}`;
    return this.http.get(url)
      .map(this.extraData)
      .catch(this.handleError);
  }

  getPost(id): Observable<any> {
    let url = `${Config.apiUserRoot}post/${id}`;
    return this.http.get(url)
      .map(this.extraData)
      .catch(this.handleError);
  }

  getPostNeighbors(id): Observable<any> {
    let url = `${Config.apiUserRoot}postneighbors/${id}`;
    return this.http.get(url)
      .map(this.extraData)
      .catch(this.handleError);
  }

  addPostReading(id): Observable<any> {
    let url = `${Config.apiUserRoot}post`;
    let body = JSON.stringify({'id': id});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(url, body, options)
      .map(this.extraData)
      .catch(this.handleError);
  }

  private extraData(res) {
    let body = res.json();
    return body || [];
  }

  private handleError (error) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
