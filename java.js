/*
1. sortear o número de 1 a 100
2. recolher o palpite
3. verificar se o palpite é um numero de 1 a 100
    3.1 se o numero for 0 ou > 100 pedir para escolher um numero válido
4. verificar se o numero escolhido é o mesmo que o que foi sorteado
5. dar dica
6. contar uma tentativa
*/

let numero = Math.floor(Math.random() * 100) + 1;
let tentativa = 0;


function Chutar () {

    const recolherPalpite = parseInt(document.getElementById('palpite').value);
        if (recolherPalpite < 1 || recolherPalpite > 100) {
            alert('Escolha um número de 1 a 100');
            return; // para não continuar o resto da função
        }
        if (recolherPalpite == numero){
        document.getElementById('resultado').textContent = 'Parabéns! Você acertou';
        document.getElementById('dica').textContent = '';
        }
        else if (recolherPalpite > numero){
        tentativa +=1
        document.getElementById('dica').textContent = 'Tente um número menor. ' + 'Você usou ' + tentativa +'tentativa(s)';
        document.getElementById('tentativas').textContent = tentativa;
        }
        else if (recolherPalpite < numero){
        tentativa +=1
        document.getElementById('dica').textContent = 'Tente um número maior. ' + 'Você usou ' + tentativa +'tentativa(s)';
        document.getElementById('tentativas').textContent = tentativa;
        }

        if (tentativa == 10){
             document.getElementById('resultado').textContent = 'Você perdeu.';
        }

}

