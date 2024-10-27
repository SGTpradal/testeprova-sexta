document.addEventListener("DOMContentLoaded", () => {
    const tabelaCadastros = document.getElementById("tabelaCadastros").getElementsByTagName('tbody')[0];

    // Função para carregar os dados do LocalStorage e exibi-los na tabela
    function carregarCadastros() {
        const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
        tabelaCadastros.innerHTML = ""; // Limpar tabela antes de preencher

        cadastros.forEach(cadastro => {
            const row = tabelaCadastros.insertRow();
            row.insertCell(0).textContent = cadastro.nome;
            row.insertCell(1).textContent = cadastro.email;
            row.insertCell(2).textContent = cadastro.telefone;
        });
    }

    // Carregar cadastros ao iniciar
    carregarCadastros();
});
