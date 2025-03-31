const nome = 'Miguel';
const sobrenome = 'Dos Santos De Andrade';
let anoAtual = 2025
idadeAteFinalDoAno = 18;
console.log('O meu nome e sobrenome é:' + nome , sobrenome);
const anoNasci = anoAtual - idadeAteFinalDoAno;

console.log('Nasci no ano ' + anoNasci);

/* function maiorIdade (minhaIdade, texto){
 var   minhaIdade = 18 
 var  texto 


 if ( minhaIdade == 18){
    return texto = 'Sou maior de idades',
    console.log(texto) ;
} else {
    texto = 'Sou menor de idade',
    console.log(texto); 
}
  
}
*/





// inicio da aula 3 
alert('Voce esta acessando o site');
var nomeInserido = prompt('Insira o seu nome e sobrenome:');

console.log('O usuário '+ nomeInserido + ' logou no site');
alert('Olá, ' + nomeInserido + '! Bem-vindo!');

var idadeInserida = prompt(parseint('Insira sua idade'));
var idadeCorreta = parseint(idadeInserida);

alert('Sua idade é ' + idadeCorreta);