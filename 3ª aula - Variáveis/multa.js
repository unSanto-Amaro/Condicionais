let valorVelocidade = document.getElementById("ValorDaVelocidade");
let ResultadoDaVelocidade = document.getElementById("resultadoDaVelocidade");

function GerarMulta()
{
    if (valorVelocidade.value > 80) {
        let sub = valorVelocidade.value - 80;
        let mult = sub * 5;
        ResultadoDaVelocidade.innerHTML = mult
    } else {
        ResultadoDaVelocidade.innerHTML = "Você não foi multado"
    }
}