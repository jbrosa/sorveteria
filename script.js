// botao adicionar
// botao excluir
// if foram selecionador 2 avançar else nao passar

// organizar id e classe de cada coisa para ligar aos botoes
// 
// levar o pedido do botao ate o carrinho

/* selecionar elemento, mas ele so pode formar 1 pedido quando atender
a necessidade
lembrar que a funçao de apagar deve ser vinculada a de add e vice versa
apos fechar um mostrar no carrinho, opçao de mais

talvez uma funçao onde chama a quantidade de elementos pelo id, uma
funçao onde o click seja geral nao separado com queryselector
*/
/* quando for clicado em um sabor/ cobertura, aparecer a opçao clicada ate se formar e ir para o carrinho.
quando for para o carrinho notificaçao de ir para o carrinho */

/* ao clicar


*/
/* document.querySelectorAll("button").forEach( function(button) {
    
    button.addEventListener("click", function(event) {

    const el = event.target || event.srcElement;

    const id = el.id;

    console.log(id);

  });
  
});
*/

function sorveteCompleto () {
  const escolha = quantSorvete && quantCobertura;

  if (quantSorvete === 2 && quantCobertura === 1)
  para.textContent = "Um pedido completo! Deseja continuar ou fechar?";
  else if (quantSorvete > 2 && quantCobertura === 1)
  para.textContent = "Você adicionou sorvetes demais.";
  else if (quantSorvete < 2 && quantCobertura === 1)
  para.textContent = "Está faltando os sabores do sorvete.";
  else if (quantSorvete === 2 && quantCobertura > 1)
  para.textContent = "Você adicionou coberturas demais.";
  else (quantSorvete === 2 && quantCobertura < 1)
  para.textContent = "Você precisa adicionar a cobertura.";
}
