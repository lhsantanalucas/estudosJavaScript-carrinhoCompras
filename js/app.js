let totalGeral;
limpar();

function adicionar() {
    // recuperar valores: quantidade, produto escolhido e valor. Obs.: Necessário colocar .value quando deseja buscar o valor recebido
    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;
    // separando o nome do produto e o valor do produto
    let produtoNome = produto.split('-')[0];
    let produtoValor = produto.split('R$')[1];
    let precoTotal = produtoValor * quantidade;
    // colocando um alert para validar se foi recuperado corretamente. Obs.: Como foi adicionado .value no código acima, aqui não precisa.
    // Poderia ser alert(quantidade.value); e alert(produto.value);
    // Adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$ ${produtoValor}</span>
        </section>`;

    // Atualizar valor total.
    totalGeral = (totalGeral + precoTotal);
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}