var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function entrar(nome, senha) {
    var instrucao = `

        SELECT * FROM cadastro WHERE nome = '${nome}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, senha) {
    var instrucao = `
        INSERT INTO cadastro (nome, senha) VALUES ('${nome}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function inserir_quiz(score, fkcadastro) {
    var instrucao = `
        INSERT INTO quiz (pontuacao, fkCadastro) VALUES ('${score}', '${fkcadastro}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function selecionar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT * FROM cadastro join quiz on idcadastro = fkcadastro;;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}


function tudo(){
    var instrucao = `
    select idcadastro, nome, truncate(avg(pontuacao),2) as 'pontuacao', fkcadastro from cadastro join quiz on idcadastro = fkcadastro group by nome;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);

}

module.exports = {
    entrar,
    cadastrar,
    listar,
    inserir_quiz,
    tudo,
    selecionar
};