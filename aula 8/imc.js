const nome = 'Leonardo';
const sobrenome = 'Branco';
const idade = 24;
const peso = 75;
const altura = 1.81;
let imc;
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
