var resposta, vetor, acertos = 0, erros = 0, option, dnv;

option = document.querySelector('.select');

option.innerHTML += "<p class='select1'>" + "Jogo rápido" + "</p>";
option.innerHTML += "<p class='select2'>" + "Jogo com perdão" + "</p>";
option.innerHTML += "<input type='radio' name='botao' value='0' onclick='mudar()' class='botaoRapido' checked>";
option.innerHTML += "<input type='radio' name='botao' value='1' onclick='mudar()' class='botaoPerdao'>";

mudar();
function mudar(){
    if (document.querySelector('.botaoRapido').checked){
        dnv = document.querySelector('.botaoRapido').value;
    }else if (document.querySelector('.botaoPerdao').checked){
        dnv = document.querySelector('.botaoPerdao').value;
    }   
}

function inicio(){
    fetch("https://quizapi.io/api/v1/questions?apiKey=dupfWrb0ZPkFxbPgOrMBGIWUu19izD3kTFoxAVKZ&difficulty=easy&limit=1") //Faz a requisicão
    .then((response) => response.json()) // E agora? recebi os dados! => response (dados que recebi) response.json (conversão para usar em codigo)
    .then((data) => {
        vetor = data;
        console.log(data);
        var pergunta = document.querySelector('.pergunta');
        pergunta.innerHTML = "<p>" + data[0].question + "</p>";

        var first = document.querySelector('.firstask');
        first.innerHTML = '';

        first.innerHTML += "<li class='resp1' onclick='handleAnswer(1)'>" + data[0].answers.answer_a + "</li>";

        first.innerHTML += "<li class='resp2' onclick='handleAnswer(2)'>" + data[0].answers.answer_b + "</li>";

        if (data[0].answers.answer_c){
            first.innerHTML += "<li class='resp3' onclick='handleAnswer(3)'>" + data[0].answers.answer_c + "</li>";
        }

        if (data[0].answers.answer_d){
            first.innerHTML += "<li class='resp4' onclick='handleAnswer(4)'>" + data[0].answers.answer_d + "</li>";
        }

        if (data[0].answers.answer_e){
            first.innerHTML += "<li class='resp5' onclick='handleAnswer(5)'>" + data[0].answers.answer_e + "</li>";
        }

        if (data[0].answers.answer_f){
            first.innerHTML += "<li class='resp6' onclick='handleAnswer(6)'>" + data[0].answers.answer_f + "</li>";
        }

        var difficult = document.querySelector('.difficult');
        var category = document.querySelector('.category');

        category.innerHTML = "<p>" + 'Categoria: ' + data[0].category + "</p>";
        difficult.innerHTML = "<p>" + 'Dificuldade: ' + data[0].difficulty + "</p>";
    })
}

reset();
function reset(){
    document.querySelector('.acertos').innerHTML = "<p>" + 'Acertos: ' + acertos + "</p>";
    document.querySelector('.erros').innerHTML = "<p>" + 'Erros: ' + erros + "</p>";
    inicio();
}

function handleAnswer(resposta){
    alert (dnv);
    if (resposta == "1"){
        if (vetor[0].correct_answers.answer_a_correct == "true"){
            alert ("correto");
            acertos += 1;
            reset();
        }else{
            alert ("errado");
            erros += 1;
            if (dnv == "0"){
                reset();
            }
        }

    }else if (resposta == "2"){
        if (vetor[0].correct_answers.answer_b_correct == "true"){
            alert ("correto");
            acertos += 1;
            reset();
        }else{
            alert ("errado");
            erros += 1;
            if (dnv == "0"){
                reset();
            }
        }

    }else if (resposta == "3"){
        if (vetor[0].correct_answers.answer_c_correct == "true"){
            alert ("correto");
            acertos += 1;
            reset();
        }else{
            alert ("errado");
            erros += 1;
            if (dnv == "0"){
                reset();
            }
        }

    }else if (resposta == "4"){
        if (vetor[0].correct_answers.answer_d_correct == "true"){
            alert ("correto");
            acertos += 1;
            reset();
        }else{
            alert ("errado");
            erros += 1;
            if (dnv == "0"){
                reset();
            }
        }

    }else if (resposta == "5"){
        if (vetor[0].correct_answers.answer_e_correct == "true"){
            alert ("correto");
            acertos += 1;
            reset();
        }else{
            alert ("errado");
            erros += 1;
            if (dnv == "0"){
                reset();
            }
        }

    }else if (resposta == "6"){
        if (vetor[0].correct_answers.answer_f_correct == "true"){
            alert ("correto");
            acertos += 1;
            reset();
        }else{
            alert ("errado");
            erros += 1;
            if (dnv == "0"){
                reset();
            }
        }
    }
}