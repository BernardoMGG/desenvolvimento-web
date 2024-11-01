const parametros = new URLSearchParams(window.location.search)
const id = parametros.get("id");

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const montaPag = (dados) => {
    const body = document.body;
    body.innerHTML = '';
    
    const nome = document.createElement("h1")
    nome.innerHTML = dados.nome
    body.appendChild(nome);

    const imagem = document.createElement("img");;
    imagem.src = dados.imagem;
    body.appendChild(imagem);

    const descricao = document.createElement("p");
    descricao.innerHTML = dados.detalhes;
    body.appendChild(descricao);

    const njogos = document.createElement("p");
    descricao.innerText = dados.n_jogos;
    body.appendChild(njogos);

    const posicao = document.createElement("p");
    descricao.innerText = dados.posicao;
    body.appendChild(posicao);

    const naturalidade = document.createElement("p");
    descricao.innerText = dados.naturalidade;
    body.appendChild(naturalidade);

    const nascimento = document.createElement("p");
    descricao.innerText = dados.nascimento;
    body.appendChild(nascimento);

    const altura = document.createElement("p");
    descricao.innerText = dados.altura;
    body.appendChild(altura);

    const notimedesde = document.createElement("p");
    descricao.innerText = dados.no_botafogo_desde;
    body.appendChild(notimedesde);
}

pega_json(`https://botafogo-atletas.mange.li/2024-1/${parametros.get("id")}`).then(
    ( r ) => montaPag(r)
);

console.log(parametros.get("id"))

/*
img (FEITO)
n jogos
nome (FEITOS)
posicao
naturalidade
nascimento
altura
no time desde
detalhes (FEITO)
*/