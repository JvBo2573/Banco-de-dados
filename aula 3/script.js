class Pessoa{
    constructor(nome, idade){
        this.nome = nome 
        this.idade = idade
    }
    dizerOlá(){
        console.log(`Olá meu nome é: ${this.nome}`);
    }
        
}

// =========================================================================

const pessoa1 = new Pessoa("bino", 20, "Natal");
pessoa1.dizerOlá();

class Aluno{
    constructor(nome,idade,matricula,cpf){
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.cpf = cpf;
    }
    info(){
        console.log(`O aluno ${this.nome} tem ${this.idade} anos, possui a matricula ${this.matricula} e seu cpf é ${this.cpf}.`)
    }

}

const aluno1 = new Aluno("joão", 15, "1232", 123456789);
aluno1.info();
const aluno2 = new Aluno("pedro", 14, "0908", 847362638)
aluno2.info();


// =========================================================================

class Animal{
    constructor(nome, idade, patas){
        this.nome = nome;
        this.idade = idade;
        this.patas = patas;
    }
    emitirSom(){
        console.log()
    }

}

class Cachorro extends Animal{
    constructor(nome, idade, patas,raca){
        super(nome, idade, patas);
        this.raca = raca;
    }
    emitirSom(){
        console.log("au au");
    }
}
const cachorro1 = new Cachorro("Rex", 12, 4, "caramelo");
cachorro1.emitirSom();

// ========================================================================

class Pessoa {
    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    info(){
        console.log(`Aluno:${this.nome} Idade:${this.idade} CPF:${this.cpf}`);
    }
}

class Aluno extends Pessoa{
    constructor(nome, idade, cpf, matricula){
        super(nome, idade, cpf);
        this.matricula = matricula;
    }
    info(){
        super.info();
        console.log(`Matricula: ${this.matricula}.`);
    }
}

const aluno3 = new Aluno("josé", 25, "334.351.864-00", 12);
aluno3.info();