// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var cpf = sessionStorage.CPF_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_cpf_usuario = document.getElementById("b_cpf_usuario");

    if (email != null && nome != null && cpf != null) {
        b_usuario.innerHTML = nome;
        b_cpf_usuario.innerHTML = cpf;
    } else {
        window.location.href = "login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location.href = "login.html";
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

