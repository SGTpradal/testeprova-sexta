document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");
    const listaCadastros = document.getElementById("listaCadastros");

    // Função para carregar os dados do LocalStorage
    function carregarCadastros() {
        const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
        listaCadastros.innerHTML = "";
        cadastros.forEach((cadastro, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${cadastro.nome} - ${cadastro.email} - ${cadastro.telefone} 
                            <button onclick="editarCadastro(${index})">Editar</button>
                            <button onclick="excluirCadastro(${index})">Excluir</button>`;
            listaCadastros.appendChild(li);
        });
    }

    // Função para adicionar cadastro
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;

        const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
        cadastros.push({ nome, email, telefone });
        localStorage.setItem("cadastros", JSON.stringify(cadastros));
        form.reset();
        carregarCadastros();
    });

    // Função para editar cadastro
    window.editarCadastro = (index) => {
        const cadastros = JSON.parse(localStorage.getItem("cadastros"));
        const cadastro = cadastros[index];
        document.getElementById("nome").value = cadastro.nome;
        document.getElementById("email").value = cadastro.email;
        document.getElementById("telefone").value = cadastro.telefone;
        excluirCadastro(index); // Remove o cadastro atual antes de editar
    };

    // Função para excluir cadastro
    window.excluirCadastro = (index) => {
        const cadastros = JSON.parse(localStorage.getItem("cadastros"));
        cadastros.splice(index, 1);
        localStorage.setItem("cadastros", JSON.stringify(cadastros));
        carregarCadastros();
    };

    // Carregar cadastros ao iniciar
    carregarCadastros();
});
/*next*/