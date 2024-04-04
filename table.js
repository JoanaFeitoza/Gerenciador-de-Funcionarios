var nome = document.querySelector('#name')
var raca = document.querySelector("#raca")
var nasc = document.querySelector("#dataNascimento")

var list = document.querySelector('#dinamic-list')

class Pessoa {
    constructor(nome, raca, nasc) {
        this.nome = nome
        this.raca = raca
        this.nasc = new Date(nasc) // Convertendo a string para objeto Date
    }
    calcIdade() {
        var agora = new Date()
        var anoAtual = agora.getFullYear()
        var anoNascimento = this.nasc.getFullYear()
        var idade = anoAtual - anoNascimento
        return idade
    }
}

var pessoas = []

function cadastrar() {
    var people = new Pessoa(nome.value, raca.value, nasc.value)
    pessoas.push(people)

    let row = document.createElement('tr');

    for (i = 0; i < pessoas.length; i++) {
        row.style.color = '#333333'
        row.style.fontFamily = 'Bricolage Grotesque'
        row.innerHTML = `
        <td><a>${pessoas[i].nome}</a></td>
        <td>${pessoas[i].raca}</td>
        <td>${formatDate(pessoas[i].nasc)}</td>
        <td>${pessoas[i].calcIdade() + ' anos'}</td>
        `
        list.appendChild(row)
    }
}

// Função para formatar a data
function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    // Adicionando zero à esquerda se necessário
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return `${day}/${month}/${year}`;
}
