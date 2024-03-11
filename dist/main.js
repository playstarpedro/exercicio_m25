"use strict";

var alunos = [{
  nome: "Maria",
  nota: 9
}, {
  nome: "Pedro",
  nota: 4
}, {
  nome: "Ana",
  nota: 7
}];
function filtraAlunosAprovados() {
  var alunosAprovados = alunos.filter(function (alunos) {
    return alunos.nota >= 6;
  });
  console.log(alunosAprovados);
}
filtraAlunosAprovados();