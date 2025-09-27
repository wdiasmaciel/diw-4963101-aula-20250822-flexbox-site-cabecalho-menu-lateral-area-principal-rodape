let noticiasCarregadas = false;

function lerNoticias() {
    const container = document.getElementById("container");

    if (!noticiasCarregadas) {
        carregarNoticias();
        noticiasCarregadas = true;
    } else {
        container.innerHTML = "";
        noticiasCarregadas = false;
    }
}

function carregarNoticias() {
    const container = document.getElementById("container");

    dados.forEach(item => {
        const cartao = document.createElement("div");

        cartao.className = "cartao";

        cartao.innerHTML = `
          <img src="${item.imagem}" alt="${item.titulo}">
          
        `;
    });
}






