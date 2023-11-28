import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/model/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private hosting: string = 'http://127.0.0.1:8000/';
  private action: string = 'api/proveedor';
  private options:any;
  private authSecretKey:string="Token_Bearer";

  constructor(private http: HttpClient) {
    this.options={
      headers:new Headers({
        Accept:'application/json',
        'Content-type':'application/json',
        Authorization:'Bearer '+localStorage.getItem(this.authSecretKey)
      })
    };
  }
  getList(): Observable<any> {
    //http://127.0.0.1:8000/api/solicitud
    return this.http.get(this.hosting + this.action,this.options);
  }
  delete(ProveedorID: number): Observable<any> {
    //delete http://127.0.0.1:8000/api/solicitud/40
    return this.http.delete(this.hosting + this.action + '/' + ProveedorID,this.options);
  }
  create(proveedor: Proveedor): Observable<any> {
    return this.http.post(this.hosting + this.action, proveedor,this.options);
  }
  update(ProveedorID: number, proveedor: Proveedor): Observable<any> {
    return this.http.put(this.hosting + this.action + '/' + ProveedorID, proveedor,this.options);
  }
  get(ProveedorID: number): Observable<any> {
    return this.http.get(this.hosting + this.action + '/' + ProveedorID,this.options);
  }
}
