const textoAnimado = document.querySelector('.texto-animado');
const textos = ['Solicitação', 'Processo', 'Charles²']; // Textos que serão exibidos

let indexTexto = 0;
let indexLetra = 0;

function escreverTexto() {
  if (indexLetra < textos[indexTexto].length) {
    textoAnimado.textContent += textos[indexTexto].charAt(indexLetra);
    indexLetra++;
    setTimeout(escreverTexto, 100); // Velocidade da digitação
  } else {
    setTimeout(apagarTexto, 2000); // Tempo antes de apagar o texto
  }
}

function apagarTexto() {
  if (indexLetra > 0) {
    textoAnimado.textContent = textos[indexTexto].substring(0, indexLetra - 1);
    indexLetra--;
    setTimeout(apagarTexto, 50); // Velocidade ao apagar
  } else {
    indexTexto = (indexTexto + 1) % textos.length; // Próximo texto
    setTimeout(escreverTexto, 500); // Tempo antes de começar a escrever
  }
}

escreverTexto(); // Inicia a animação

