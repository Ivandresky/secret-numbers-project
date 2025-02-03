//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome) {
        if (amigos.includes(nome)) {
            alert('Este nome já foi adicionado!');
        } else {
            amigos.push(nome);
            atualizarListaAmigos();
            inputAmigo.value = '';
        }
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome para realizar o sorteio.');
        return;
    }

    // Sorteia um nome aleatório da lista
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O seu amigo secreto é: <strong>${amigoSecreto}</strong></li>`;

    // Limpa os nomes após o sorteio
    limparNomes();

    // Desabilita o botão de sortear após o sorteio
    const botaoSortear = document.querySelector('.button-draw');
    botaoSortear.disabled = true;
}

function limparNomes() {
    // Limpa a lista de amigos
    amigos = [];
    // Atualiza a exibição da lista na interface
    atualizarListaAmigos();
}

function reiniciarJogo() {
    // Limpa a lista de amigos e o resultado do sorteio
    limparNomes();
    document.getElementById('resultado').innerHTML = '';

    // Habilita o botão de sortear novamente
    const botaoSortear = document.querySelector('.button-draw');
    botaoSortear.disabled = false;
}

// Adicionando evento de tecla "Enter" para adicionar nomes
document.getElementById('amigo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});