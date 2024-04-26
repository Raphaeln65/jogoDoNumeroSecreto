let listaDeNumerosSorteaods = [];
let numeroMaximo = 10
let numeroSecreto = gerarNumeroAleatorio();
console.log(`Numero Secreto é : ${numeroSecreto}`);
let tentativas = 1

 function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto
   responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
 }
function exibirMensagemInicial(){
  exibirTextoNaTela('h1','Jogo do Numero Secreto');
  exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}

 exibirMensagemInicial();

function verificarChute(){
   let chute = document.querySelector('input').value;
     
   if (chute == numeroSecreto){
      exibirTextoNaTela('h1','Acertou');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto){
        exibirTextoNaTela('p','O numero secreto é menor.'),
      } else{
          exibirTextoNaTela('p','O numero secreto é maior');
        }
        tentativas++
        limparCampo()
      }
    }

 function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * (numeroMaximo) + 1);
  let quantidadeDeElementoNaLista = listaDeNumerosSorteaods.length;

 if (quantidadeDeElementoNaLista == (numeroMaximo)){
  listaDeNumerosSorteaods = []
 }

  
  if(listaDeNumerosSorteaods.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else{
    listaDeNumerosSorteaods.push(numeroEscolhido)
    console.log(listaDeNumerosSorteaods)
    return numeroEscolhido;
  }
 }

 function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
 }

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  console.log(`Numero Secreto é : ${numeroSecreto}`);
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
 }
 