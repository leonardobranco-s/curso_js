// se nao receber valor, considera o declarado
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

const raiz = n => Math.sqrt(n); //arrow function

console.log(raiz(25));
 