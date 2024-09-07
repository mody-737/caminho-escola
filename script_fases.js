lastFase = 0;

/*Cata tudo que precisa*/
dude = document.querySelector(".dude");
school = document.querySelector(".school");
home = document.querySelector(".home");
start_btn = document.querySelector(".start-btn");



/*Função que inicia a fase*/
function start(fase) {

    /*Esconde tudo sobre popups*/
    document.querySelector("#main-menu").classList.add("hid");
    document.querySelector("#stage").classList.add("hid");
    document.querySelector("#pre-start").classList.add("hid");
    document.querySelector("#lose").classList.add("hid");
    document.querySelector("#win").classList.add("hid");
    document.querySelector(".overlay").classList.add("hid");
    dude.style.display = "none";
    document.querySelectorAll(".fases").forEach(fase => {
        fase.style.display = "none";
    });
    setTimeout(()=> {
        document.querySelector("#main-menu").style.display = "none";
        document.querySelector("#stage").style.display = "none";
        document.querySelector("#pre-start").style.display = "none";
        document.querySelector("#lose").style.display = "none";
        document.querySelector("#win").style.display = "none";
        document.querySelector(".overlay").style.display = "none";
    },600);


    /*Pega o nome que a epssoa escolheu*/
    dudeName = document.querySelector("#dude-name").value;
    if (dudeName.length > 0) {
        document.querySelector("#name-rec").innerHTML = `Parabéns! Você conseguiu vencer as dificuldades desse caminho e conseguiu levar <b>${dudeName}</b> para a escola, lhe garantindo um futuro! Vamos para o próximo dia!`;
        } else {
            document.querySelector("#name-rec").innerHTML = `Parabéns! Você conseguiu vencer as dificuldades desse caminho e conseguiu levar <b>Joãozinho</b> para a escola, lhe garantindo um futuro! Vamos para o próximo dia!`;
        }

    lastFase = fase;


    /*Encaminha qual fase deve iniciar*/
    switch(fase) {
        case 1:
            document.querySelector("#fase-1").style.display = "block";
            school.style.top = "35vh";
            school.style.right = "12vw";
            school.style.display = "inline-block";

            home.style.top = "35vh";
            home.style.left = "12vw";
            home.style.display = "inline-block";

            start_btn.style.top = "38vh";
            start_btn.style.left = "13vw";
            start_btn.style.display = "inline-block";
            break;

        case 2:
            document.querySelector("#fase-2").style.display = "block";
            school.style.top = "70vh";
            school.style.right = "12vw";
            school.style.display = "inline-block";

            home.style.top = "15vh";
            home.style.left = "8vw";
            home.style.display = "inline-block";

            start_btn.style.top = "16vh";
            start_btn.style.left = "9vw";
            start_btn.style.display = "inline-block";
            break;


        case 3:
            document.querySelector("#fase-3").style.display = "block";
            school.style.top = "70vh";
            school.style.right = "12vw";
            school.style.display = "inline-block";

            home.style.top = "15vh";
            home.style.left = "7vw";
            home.style.display = "inline-block";

            start_btn.style.top = "16vh";
            start_btn.style.left = "8vw";
            start_btn.style.display = "inline-block";
            break;

        default:
            alert("Esse jogo ainda está em desenvolvimento.\nNão tem mais fases :(\n***'OK' irá reiniciar o jogo***");
            window.location.reload();
    }
}