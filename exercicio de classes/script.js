class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }
    apresentar(){
        console.log(`Meu nome é ${this.nome}, e tenho ${this.idade} anos.`);    
    }
    
}

const pessoa1 = new Pssoa("joão", 23);
const pessoa2 = new Pessoa("pedro", 27);
const pessoa3 = new Pessoa("Ana", 25);

let pessoas = [pessoa1, pessoa2, pessoa3];

for (let pessoa of pessoas){
    pessoa.apresentar()
}

// =========================================================================================


class Aluno {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.notas = [];
    }
    adicionarNota(nota){
        this.notas.push(nota);
    }
    capturarNota(){
        return this.notas
    }
    calcularMedia(){
        let soma = 0
        for(let nota of this.notas){
            soma = soma + nota
        }
        let media = soma/this.notas.length
        console.log(media.toFixed(1));
    }
}

class Turma{
    constructor(nome){
        this.nomeTurma = nome;
        this.alunos = [];
    }
    receberAluno(aluno){
        this.alunos.push(aluno);
    }
    listarTurma(){
        for(let aluno of this.alunos){
            console.log(aluno);
        }
        console.log(this.nomeTurma);
    }

}

//=== criando aluno1 ===
const aluno1 = new Aluno("pedro", 15);
//=== adicionando nota do aluno ===
aluno1.adicionarNota(8);
aluno1.adicionarNota(5);
aluno1.adicionarNota(7);


//=== criando aluno2 ===
const aluno2 = new Aluno("joão", 14);
//=== adicionando nota do aluno ===
aluno2.adicionarNota(6);
aluno2.adicionarNota(7);
aluno2.adicionarNota(9);


//=== criando aluno3 ===
const aluno3 = new Aluno("paulo", 15);
//=== adicionando nota do aluno ===
aluno3.adicionarNota(7);
aluno3.adicionarNota(8);
aluno3.adicionarNota(9);

aluno1.calcularMedia();
aluno2.calcularMedia();


//=== Criação da turma1 - programador ===

const turma1 = new Turma("programador");

turma1.receberAluno(aluno1);
turma1.receberAluno(aluno2);

turma1.listarTurma();

//=== Criação da turma2 - Calculo 1 ===

const turma2 = new Turma("Calculo 1");

turma2.receberAluno(aluno3);
turma2.receberAluno(aluno1);



