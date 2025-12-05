// SIMULACAO DE LOGIN (pode integrar com Banco de Dados depois)
const clientes = [
    { cpf: "111.111.111-11", senha: "123" },
    { cpf: "222.222.222-22", senha: "456" },
    { cpf: "333.333.333-33", senha: "789" }
];

// PRODUTOS DO SEU BANCO COM IMAGENS
const produtos = [
    { id: 1, nome: "Arroz 5kg", preco: 22.90, img: "https://http2.mlstatic.com/D_NQ_NP_936615-MLA99918197829_112025-O.webp"},
    { id: 2, nome: "Feijão 1kg", preco: 8.50, img: "https://www.arenaatacado.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dwd863e4e7/Produtos/15031-7896006751113-feijao%20preto%20camil%20pacote%201%20kg-camil-1.jpg" },
    { id: 3, nome: "Açúcar 2kg", preco: 6.20, img: "https://paulistaoatacadista.vtexassets.com/arquivos/ids/311586/ACUCARCRISTALCRISTALCUCAR2KG1.jpg?v=638082791854230000" },
    { id: 4, nome: "Leite 1L", preco: 4.99, img: "https://www.davo.com.br/ccstore/v1/images/?source=/file/v1458764921298408807/products/prod_7898215157403.imagem1.jpg&height=940&width=940" },
    { id: 5, nome: "Café 500g", preco: 12.00, img: "https://m.media-amazon.com/images/I/61ybzna4AML._AC_UF894,1000_QL80_.jpg" },
];

let total = 0;

// -------- LOGIN --------
function login() {
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    const cliente = clientes.find(c => c.cpf === cpf && c.senha === senha);

    if (!cliente) {
        alert("CPF ou senha incorretos!");
        return;
    }

    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("venda-container").classList.remove("hidden");

    carregarProdutos();
}

// -------- CARREGA PRODUTOS NA TELA --------
function carregarProdutos() {
    const lista = document.getElementById("produtos-list");
    lista.innerHTML = "";

    produtos.forEach(p => {
        lista.innerHTML += `
            <div class="produto-card">
                <img src="${p.img}" alt="${p.nome}">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco.toFixed(2)}</p>
                <button onclick="addProduto(${p.preco})">Adicionar</button>
            </div>
        `;
    });
}

// -------- ADICIONAR PRODUTO AO TOTAL --------
function addProduto(valor) {
    total += valor;
    document.getElementById("total").innerText = total.toFixed(2);
}

// -------- FINALIZAR VENDA --------
function finalizarCompra() {
    if (total === 0) {
        alert("Nenhum produto selecionado!");
        return;
    }

    alert("Compra finalizada! Total: R$ " + total.toFixed(2));
    total = 0;
    document.getElementById("total").innerText = "0.00";
}
