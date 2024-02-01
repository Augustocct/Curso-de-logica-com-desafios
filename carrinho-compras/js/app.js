

function adicionar() {
    //recuperar o nome, quantidade e valor dos produtos
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]
    let valorUnitario = produto.split('R$')[1]
    let quantidade = document.getElementById('quantidade').value;
    //cacular o preço total 
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
    </section>
  </section>`

    // calcular o preço, o nosso subtotal
    // adicionar no carrinho 
    // atualizar o valor total
    totalGeral = totalGeral + preco;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    let totalGeral = 0;
    carrinho = document.getElementById('lista-produtos').innerHTML = '';
    campoTotal = document.getElementById('valor-total').innerHTML = '';
}