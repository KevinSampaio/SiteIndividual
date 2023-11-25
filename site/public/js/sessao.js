// sessão
function validarSessao() {
    var nome = sessionStorage.NOME_USUARIO;
    var id = sessionStorage.ID_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_id_usuario = document.getElementById("b_id_usuario");

    if (nome != null && id != null) {
        b_usuario.innerHTML = nome;
        b_id_usuario.innerHTML = id;
    } else {
        window.location.href = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location.href = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


function limparFormulario(){
    document.getElementById('nome_input').value=''; // Limpa o campo
    document.getElementById('dtNasc_input').value='';
    document.getElementById('faixa_aluno_input').value='';
    document.getElementById('peso_input').value='';
    document.getElementById('altura_input').value='';
    document.getElementById('listaEquipe').value='Selecione uma Equipe';
    document.getElementById('listaProfessor').value='Selecione um Professor';
}
