const url = "https://botafogo-atletas.mange.li/2024-1/"

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const container = document.getElementById("container");

const manipulaClick = (e) => {
    const id = e.currentTarget.dataset.id;
    const url = `detalhes.html?id=${id}`;

    document.cookie = `id=${id}`
    document.cookie = `altura=${e.currentTarget.dataset.altura}`
    
    localStorage.setItem(`id`, id);
    localStorage.setItem(`dados`, JSON.stringify(e.currentTarget.dataset));

    sessionStorage.setItem(`id`, id);
    sessionStorage.setItem(`dados`, JSON.stringify(e.currentTarget.dataset));

    window.location = url;

    console.log(e.currentTarget);
}

const montaCard = (atleta) => {
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descricao = document.createElement("p");
    const link = document.createElement("a");

    nome.innerHTML = atleta.nome;
    nome.style.fontFamily= 'sains-serif';
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);

    descricao.innerHTML = atleta.detalhes;
    cartao.appendChild(descricao);

    // link.innerText = 'Saiba Mais';
    // link.href = `detalhes.html?id=${atleta.id}`;
    // cartao.appendChild(link);

    cartao.onclick = manipulaClick;

    cartao.dataset.id = atleta.id;
    cartao.dataset.nJogos = atleta.n_jogos;
    cartao.dataset.altura = atleta.altura;

    return cartao;
}

pega_json(`${url}masculino`).then( 
    (r) => {
        r.forEach(
            (ele) => container.appendChild(montaCard(ele))
        )
    }
);
