import { Injectable } from '@angular/core';
import { Curso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() {
  }
  
  getCursos(){
    return[
      new Curso('Spring Boot',45,'https://www.udemy.com/course/spring-boot-ionic/',true),
      new Curso('GIT',15,'https://www.youtube.com/playlist?list=PLbEOwbQR9lqzK14I7OOeREEIE4k6rjgIj',true),
      new Curso('Java',70,'https://www.urionlinejudge.com.br/judge/pt/runs',true),
      new Curso('Sql',10, 'Fonte não digital',true),
      new Curso('Angular',30, 'https://loiane.training/continuar-curso/angular',false)
    ];
  }
}
