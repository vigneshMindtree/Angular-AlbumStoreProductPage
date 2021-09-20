import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }
private _albumUrl = '../assets/album.json';

getAlbum(id:number ):Observable<number>{
  return this._http.get(this._albumUrl).map((Response) => Response.json());
}
}
