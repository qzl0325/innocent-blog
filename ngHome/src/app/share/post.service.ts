//文章相关服务
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Config } from '../share/config';

@Injectable()
export class PostService {

  constructor(
    private http: Http
  ) { }


  getPostList(currentPage, pageSize) {
    let url = `${Config.apiAdminRoot}post?page=${currentPage}&size=${pageSize}`;
    return this.http.get(url)
      .map(this.extraData)
      .catch(this.handleError);
  }

  getPostById(id: string) {

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
