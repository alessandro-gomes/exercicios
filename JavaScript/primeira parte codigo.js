// Identifiquei que a estrutura Clientes estava errada. 
// Nao estava configurada para ser objeto e nem array, entao ajustei para funcionar das duas maneiras.

var clientesArray = [
    {
        id: 1,
        nome: "Luis Santos Silveira",
        idade: 18
    },
    {
        id : 2,
        nome : "Ricardo Lopes Alves",
        idade : 30
    },
    {
        id: 3,
        nome: "Gustavo Silva Junior",
        idade: 26
    }
];

var clientesObjeto = {
    cliente1 : {
        'id': 1,
        'nome': "Luis Santos Silveira",
        'idade': 18
    },
    cliente2 : {
        'id' : 2,
        'nome' : "Ricardo Lopes Alves",
        'idade' : 30
    },
    cliente3 : {
        'id': 3,
        'nome': "Gustavo Silva Junior",
        'idade': 26
    }
};

var numero = "5(1)9-876-543-21";

console.log("Percorrendo array:")
for (var i = 0; i < clientesArray.length; i++) {
    var nomeCompleto = clientesArray[i].nome;
    var partesDoNome = nomeCompleto.split(" ");
    var primeiroNome = partesDoNome[0];
    var ultimoSobrenome = partesDoNome[partesDoNome.length - 1];

    console.log(ultimoSobrenome + ", " + primeiroNome);
}

console.log("\nPercorrendo objeto:")
for (var i in clientesObjeto) {
    var nomeCompleto = clientesObjeto[i].nome;
    var partesDoNome = nomeCompleto.split(" ");
    var primeiroNome = partesDoNome[0];
    var ultimoSobrenome = partesDoNome[partesDoNome.length - 1];

    console.log(ultimoSobrenome + ", " + primeiroNome);
}

var numerosApenas = numero.replace(/\D/g, "");
var parte1 = numerosApenas.substring(0, 2);
var parte2 = numerosApenas.charAt(2);
var parte3 = numerosApenas.substring(3, 7);
var parte4 = numerosApenas.substring(7);

var numeroFormatado = `(${parte1})_${parte2}_${parte3}-${parte4}`;

console.log("\nNumero formatado:")
console.log(numeroFormatado);
