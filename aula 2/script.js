class Animal{
    constructor (nome,tipo){
        this.nome = nome;
        this.tipo = tipo;
    }
}

const animal1 = new Animal("rex", "cachorro");
const animal2 = new Animal("tonico", "gato")
console.log(animal2);


class Carro {
    constructor(marca,ano){
        this.marca = marca;
        this.ano = ano;
    }
    apresentar(){
       console.log (`Este carro é da marca: ${this.marca} e do ano ${this.ano}`);
    }
}

const meuCarro = new Carro("ford", "2020");
meuCarro.apresentar();
// console.log(meuCarro);



class Calculadora{
    somar(a,b){
        return a+b; 
    }

    subtração(a,b){
        return a-b;
    }

    divisão(a,b){
        return a/b;
    }

    multiplicação(a,b){
        return a*b;
    }
    
}
const resultado = new Calculadora();
console.log(resultado.multiplicação(5,7));