var instructions = document.getElementById("instructions");
var quiz = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var askQuestion = document.getElementById("askQuestion");
var submitBtn = document.getElementById("submitBtn");
var resetBtn = document.getElementById("resetBtn");
var form = document.getElementById("form");
var quiz = document.getElementById("quiz");
var inform = document.getElementById("inform");
var showScore = document.getElementById("showScore");
var displayScore = document.getElementById("displayScore");
var displayQCount = document.getElementById("displayQCount");
var checkedRadio;
var allRadios;
var i;
var score;

var questions = [
  {
    question: "Qual o nome do filme de  uma jornalista recém-formada que consegue um emprego na consagrada revista Runway, administrada por Miranda Priestly?",
    choices: ["Fox", "cinderela ", "O Diabo Veste Prada", "Beaver"],
    correct: 2
  },
  {
    question: "A história se concentra principalmente em Carrie, que é pedida em casamento por seu namorado Big, que pode estragar todo o romance devido ao seu nervosismo? ",
    choices: ["Remus Lupin", "Albus Dumbledore", "dore", "Sex and the City: O Filme"],
    correct: 3
  },
  {
    question: "Um dos filmes de moda e romance mais divertidos já criados, esta comédia retrata a vida da jornalista Becky Bloom, que mora em Nova York e sonha em trabalhar em uma revista de moda?",
    choices: ["Os Delírios de Consumo de Becky Bloom", "Triumph Twelve", "Hillman Minx", "Humber Super Snipe"],
    correct: 0
  },
  {
    question: " Estella, uma garota inteligente e criativa determinada a fazer um nome para si através de seus designs?",
    choices: ["Fountain of Mighty Magic", "Magic is Might", "Everlasting Magic", "Cruella"],
    correct: 3
  },
  {
    question: "Com doses perfeitas de comédia, romance e moda, o filme narra a história de Tilly, uma famosa costureira, após voltar à cidade na qual cresceu em busca de provar do que é capaz?",
    choices: ["cinderela", "Beaver", "A Vingança está na Moda", "Triumph Twelve"],
    correct: 2
  }
];

window.onload = beginQuiz;

function beginQuiz() {
    


    /*AparecerObotaoTentarDeNovoNoFinal */
    instructions.style.display = "block";
    showScore.style.display = "none";

  /*OrganizaEdeixarAparecerSOnaHRcerta */
    quiz.style.display = "none";
    
    /*paraAparecerOScampos */
    i = 0;

    /*ParaMarcarApontoação */
    score = 0;

}


    /*ParaComeçarOjogo */
startBtn.addEventListener("click", function() {
    instructions.style.display = "none";
    submitBtn.style.display = "block";
    quiz.style.display = "block";
    getQAs();
});




    /*FunçãoParaComeçarAvalidarOScamposDeDentro */
submitBtn.addEventListener("click", function() {
    allRadios = document.getElementsByName("option");
    var isChecked = false;
    for (var j = 0; j < allRadios.length; j++) {
        if (allRadios[j].checked) {
            isChecked = true;
            checkedRadio = j;
            break;
        }
    }
    if (!(isChecked)) {
        alert("Selecione uma resposta antes de prosseguir");
    } else {
        getResults();
        deselectRadios();
        i++;
        displayQCount.innerHTML = i + 1;
        getQAs();
    }
});


/*paraValidarOsCAmposEprosegui */
function deselectRadios() {
    allRadios = document.getElementsByName("option");
    for (var p = 0; p < allRadios.length; p++) {
        allRadios[p].checked = false;
    }
}
function getResults() {
        if (allRadios[checkedRadio].value === questions[i].choices[questions[i].correct]) {
            score++;
            displayScore.innerHTML = score;
        }
}



/*paraAparecerOScampos */
function getQAs() {
    if (i < 5) {
        askQuestion.innerHTML = questions[i].question;
        for (var k = 0; k < 4; k++) {
            document.getElementById("answer" + k).innerHTML = questions[i].choices[k];
            document.getElementById("answer" + k).setAttribute("for", questions[i].choices[k]);
            document.getElementById("label" + k).setAttribute("value", questions[i].choices[k]);
        }
    } else {
        displayResults();
    }
};




/*ParaFinalizarQuandoChegarNos5Corretos */
function displayResults() {
    quiz.style.display = "none";
    showScore.style.display = "block";
    inform.innerHTML = "Parabéns!! Você pontuou " + score + " ";
    inserir();
}

/*paraObotãoVoltaroJOgoFunciona */
resetBtn.addEventListener("click", function() {
    beginQuiz();
});


function inserir(){
    document.getElementById('num').value = score;
    document.getElementById('fkcadastro').value = sessionStorage.ID_USUARIO;
    var form = new URLSearchParams(new FormData(document.getElementById('form_quiz')));

    fetch("/usuarios/inserir_quiz", {
        method: "POST",
        body: form
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
        } else {
            throw("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
};

