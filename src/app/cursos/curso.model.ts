export class Curso {
    constructor(nome, cargaHoraria,conteudosAssistidos,completo){
      this.nome=nome;
      this.cargaHoraria=cargaHoraria;
      this.conteudosAssistidos = conteudosAssistidos;
      this.completo=completo;
  
    }
    nome: string
    cargaHoraria:Date
    conteudosAssistidos:string
    completo:boolean
  }