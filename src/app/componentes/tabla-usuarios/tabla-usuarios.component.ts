import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { listaUsuariosI } from 'src/app/modelo/listaUsuarios.interface';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  
usuarios:listaUsuariosI[] | undefined;
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(data =>{
      this.usuarios=data;
      console.log(data);
    });
  }


}
