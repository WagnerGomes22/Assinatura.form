const nome = document.querySelector('#nome').value;
const sobrenome = document.querySelector('#sobrenome').value;
const telefone = document.querySelector('#telefone').value;
const setor = document.querySelector('#setor').value;

const resultado = `${nome} ${sobrenome}
Telefone: ${telefone}
Setor: ${setor}`;

console.log(resultado);