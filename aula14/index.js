function criaPessoa(nome, sobrenome, idade) {
    return{
        nome,
        sobrenome,
        idade,

    };
}

const pessoa1 = criaPessoa('Leonardo', 'Branco', 24);
const pessoa2 = criaPessoa('Breno', 'Vasconcelos', 24);
const pessoa3 = criaPessoa('Marcello', 'Antunes', 30);

console.log(pessoa1, pessoa2, pessoa3);


const pessoa4 = {
    nome: 'Leonardo',
    sobrenome: 'Branco',
    idade: 24,
    
    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
