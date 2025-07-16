class Funcionario{
    constructor(matricula, nome, cpf, salario){

        this.matricula = matricula;
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }

    mostrarSalario(){
        console.log(this.matricula, this.nome, this.cpf, this.salario);
    }

}

class Gerente extends Funcionario{
    constructor(matricula, nome, cpf, salario, comissao) {
        super(matricula, nome, cpf, salario)
        this.comissao = comissao;
    }

    somarSalario(){
        let resultado = this.salario + this.comissao;
        return resultado;
    }
    
    mostrarSalario(){
        console.log(this.matricula, this.nome, this.cpf, this.somarSalario());
    }
    
}

const funcionario1 = new Funcionario(310861, "José", "125.280.104-19", 1580)
funcionario1.mostrarSalario();
const gerente1 = new Gerente(334351, "Marcos", "123.456.789.09", 2500, 800);
gerente1.mostrarSalario();
gerente1.somarSalario();   
typeof(gerente1);
console.log(typeof(gerente1)); 

