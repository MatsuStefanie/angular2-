import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso.model';
import { CursosService } from '../cursos.service'

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.css']
})
export class CursosDetalheComponent implements OnInit {

  cursos:Curso[];

  constructor(private CursosService : CursosService) { 
    this.cursos = CursosService.getCursos();
  }

  ngOnInit(): void {
  }

}

