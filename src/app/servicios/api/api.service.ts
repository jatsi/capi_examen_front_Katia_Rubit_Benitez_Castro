import { Injectable } from '@angular/core';
import { listaUsuariosI } from 'src/app/modelo/listaUsuarios.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
url:string="http://127.0.0.1:8000/api/lista"
  constructor(private http:HttpClient) { }
  getAllUsers():Observable<listaUsuariosI[]>{
    let direccion=this.url;
    return this.http.get<listaUsuariosI[]>(direccion);
  }
}
