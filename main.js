const botoes = document.querySelectorAll(".botao");

const textos = Document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick=function(){
        for(let j = 0 ; j <botoes.length;j++){
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");

    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");

     } 
}
const contadores = document.querySelectorAll(".contador");
const tempoAtual = new Date();// retornar a data atual do computador
const tempoObjetivo1 = new date("2030-05-02T00:00:00");
const tempoObjetivo2 = new date("2031-06-02T00:00:00");
const tempoObjetivo3 = new date("2034-07-02T00:00:00");
const tempoObjetivo4 = new date("2033-08-02T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4]

    let tempoFinal=tempoObjetivo-tempoAtual;{

    let segundos = math.floor(tempoFinal/1000);
    let minutos = math.floor(segundos/60);
    let horas = math.floor(minutos/60);
    let dias = math.floor(horas/24);

    segundos%=60;
    minutos%=60;
    horas%=24;

    return dias+"dias"+horas+"horas"+minutos+"minutos"+segundos+"segundos";
     }
     for(let i=0;i<contadores.length;i++){
        contadores[i].textContent=calculaTempo(tempos[i]);
     }