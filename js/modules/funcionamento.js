export default class Funcionamento{
  constructor(funcionamento, activeClass){
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }
 
  dadosFunctionamento(){
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
    
  }
 
  dadosAgora(){
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto(){
    const semanaAberta = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);

    return semanaAberta && horarioAberto;
  }
  
 ativaAberto(){
  if(this.estaAberto()){
    this.funcionamento.classList.add(this.activeClass);
  }
 }
  

  
  init(){
    if(this.funcionamento){
      this.dadosFunctionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}




