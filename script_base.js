
// Função popup instruções
function preStart() {
    document.querySelector("#main-menu").classList.add("hid");
    setTimeout(()=> {
        document.querySelector("#main-menu").style.display = "none";
        document.querySelector("#pre-start").style.display = "block";
    },600);
    setTimeout(()=> {
        document.querySelector("#pre-start").classList.remove("hid");
    },650);
}


// Popup escolher fase
function stage() {
    document.querySelector("#main-menu").classList.add("hid");
    document.querySelector("#pre-start").classList.add("hid");
    document.querySelector("#lose").classList.add("hid");
    document.querySelector("#win").classList.add("hid");
    setTimeout(()=> {
        document.querySelector("#main-menu").style.display = "none";
        document.querySelector("#pre-start").style.display = "none";
        document.querySelector("#lose").style.display = "none";
        document.querySelector("#win").style.display = "none";
        document.querySelector("#stage").style.display = "block";
    },600);
    setTimeout(()=> {
        document.querySelector("#stage").classList.remove("hid");
    },650);
}


//Botão de iniciar fase
document.querySelector(".start-btn").onclick = () => {
    document.querySelector(".dude").style.display = "inline-block";
    document.querySelector(".start-btn").style.display = "none";
    document.querySelector(".school").addEventListener("mouseenter", win);
    wallcollide();
    dudestart();
}


//Função que detecta colisão
function wallcollide() {
    document.querySelectorAll(".colisions").forEach(wall => {
        wall.addEventListener("mouseenter", lose);
    });
}


// Função aviso de perdeu
function lose() {
    document.querySelector(".school").removeEventListener("mouseenter", win);
    document.querySelector(".overlay").style.display = "flex";
    document.querySelector("#lose").style.display = "block";
    document.querySelectorAll(".colisions").forEach(wall => {
        wall.removeEventListener("mouseenter", lose)
    });
    document.removeEventListener('mousemove', dudefollow);
    setTimeout(()=> {
        document.querySelector(".overlay").classList.remove("hid");
        document.querySelector("#lose").classList.remove("hid");
    },50);
}


// Função reiniciar
function restart() {
    start(lastFase);
}


// Função inicia o tracking
function dudestart() {
    dude.style.left = event.clientX - 30 + 'px';
    dude.style.top = event.clientY - 60 + 'px';
    document.addEventListener('mousemove', dudefollow);
}


// Função Tracking
function dudefollow(event) {
    dude.style.left = event.clientX - 30 + 'px';
    dude.style.top = event.clientY - 60 + 'px';
}


// Função próxima fase
function next() {
    start(lastFase+1);
}


// Função ganhou
function win() {
    document.querySelector(".overlay").style.display = "flex";
    document.querySelector("#win").style.display = "block";
    document.querySelectorAll(".colisions").forEach(wall => {
        wall.removeEventListener("mouseenter", lose)
    });
    document.removeEventListener('mousemove', dudefollow);
    setTimeout(()=> {
        document.querySelector(".overlay").classList.remove("hid");
        document.querySelector("#win").classList.remove("hid");
    },50);
    document.querySelector(".school").removeEventListener("mouseenter", win);
}


/*Pesquisa - Gemini + eu*/

// Lista de materiais escolares
const materiais = [
    'Lápis',
    'Caderno',
    'Borracha',
    'Caneta',
    'Mochila',
    'Régua',
    'Apontador',
    'Estojo',
    'Corretivo',
    'Tesoura',
    'Marcador',
    'Cola'
  ];
  

// Função para exibir sugestões em tempo real
function showSuggestions() {
const input = document.getElementById('scholl-data').value.toLowerCase();
const suggestionsBox = document.getElementById('suggestions');

// Limpa as sugestões anteriores
suggestionsBox.innerHTML = '';
suggestionsBox.style.display = 'none';

if (input.length > 0) {
    // Filtra materiais que correspondem ao que foi digitado
    suggestions = materiais.filter(material => material.toLowerCase().includes(input));

    if (suggestions.length > 0) {
    suggestionsBox.style.display = 'block';
    // Exibe as sugestões
    suggestions.forEach(item => {
        p = document.createElement('p');
        p.textContent = item;
        p.onclick = () => {
        document.getElementById('scholl-data').value = item;
        pesquisar(); // Pesquisa automaticamente ao clicar na sugestão
        };
        suggestionsBox.appendChild(p);
    });
    }
}
}
// Função para pesquisar e exibir os resultados
function pesquisar() {
    const input = document.getElementById('scholl-data').value.toLowerCase();
    const resultContainer = document.getElementById('resultContainer');
    const suggestionsBox = document.getElementById('suggestions');

    // Limpa as sugestões anteriores
    suggestionsBox.innerHTML = '';
    suggestionsBox.style.display = 'none';

    // Filtra os materiais que correspondem à pesquisa
    const resultados = materiais.filter(material => material.toLowerCase().includes(input));

    if (resultados.length > 0) {
        // Exibe os resultados encontrados
        resultados.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `✔️ ${item}`;
        resultContainer.appendChild(p);
        document.getElementById('scholl-data').value = "";
        });
    }

    document.querySelector("#resultContainer").style.display = "block";
}