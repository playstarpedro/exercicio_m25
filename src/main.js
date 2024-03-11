const alunos = [
    { nome: "Maria", nota: 9},
    { nome: "Pedro", nota: 4},
    { nome: "Ana", nota: 7 }
    ];

function filtraAlunosAprovados() {
    const alunosAprovados = alunos.filter(alunos => alunos.nota >= 6)
    console.log(alunosAprovados)
}

filtraAlunosAprovados()