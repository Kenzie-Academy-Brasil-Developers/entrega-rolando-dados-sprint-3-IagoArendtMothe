function dados () {
    let primeiroDado = 0;
    let segundoDado = 0;

    let somaDado = 0;

    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0];

    const lista = document.querySelector('#MostragemDados');

    const itemTexto = document.createElement("h2");

    for (i=1; i<=1000; i++) {

        primeiroDado = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        segundoDado = Math.floor(Math.random() * (6 - 1 + 1) + 1);

        somaDado = primeiroDado + segundoDado;

        if (count[somaDado] === undefined) {
            count[somaDado] = 1;
        } else {
            count[somaDado] = count[somaDado] + 1;
        }
    }

    console.log(count);

    document.getElementById("Barra1").style.width = `${count[2]}px`;
    document.getElementById("Barra1").style.backgroundColor = "black";

    document.getElementById("Barra2").style.width = `${count[3]}px`;
    document.getElementById("Barra2").style.backgroundColor = "green";

    document.getElementById("Barra3").style.width = `${count[4]}px`;
    document.getElementById("Barra3").style.backgroundColor = "aqua";

    document.getElementById("Barra4").style.width = `${count[5]}px`;
    document.getElementById("Barra4").style.backgroundColor = "yellow";

    document.getElementById("Barra5").style.width = `${count[6]}px`;
    document.getElementById("Barra5").style.backgroundColor = "red";

    document.getElementById("Barra6").style.width = `${count[7]}px`;
    document.getElementById("Barra6").style.backgroundColor = "blue";

    document.getElementById("Barra7").style.width = `${count[8]}px`;
    document.getElementById("Barra7").style.backgroundColor = "paleturquoise";

    document.getElementById("Barra8").style.width = `${count[9]}px`;
    document.getElementById("Barra8").style.backgroundColor = "orange";

    document.getElementById("Barra9").style.width = `${count[10]}px`;
    document.getElementById("Barra9").style.backgroundColor = "pink";

    document.getElementById("Barra10").style.width = `${count[11]}px`;
    document.getElementById("Barra10").style.backgroundColor = "teal";

    document.getElementById("Barra11").style.width = `${count[12]}px`;
    document.getElementById("Barra11").style.backgroundColor = "turquoise";

    itemTexto.innerText = count;

    lista.appendChild(itemTexto);

}
const botaoDados = document.querySelector('#btnDados');

botaoDados.addEventListener('click', dados);
