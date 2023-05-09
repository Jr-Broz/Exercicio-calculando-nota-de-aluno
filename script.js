function calculaNota(){  

let nota1 = +prompt ("Insira a nota do Aluno");
let nota2 = +prompt ("Insira a nota do Aluno");
let nota3 = +prompt ("Insira a nota do Aluno");
let nota4 = +prompt ("Insira a nota do Aluno");

let mediaFinal = (nota1+nota2+nota3+nota4) / 4;


if(mediaFinal >= 7){

  console.log("==========================================");
  console.log("Aluno Aprovado");
  console.log("===========================================");
}
  else if(mediaFinal >=6.5 || mediaFinal ==6){

  console.log("==========================================");
  console.log("Aluno em Recuperação");
  console.log("===========================================");
  }
  else{
  console.log("==========================================");
  console.log("Aluno Reprovado");
  console.log("===========================================");  
  }
}
