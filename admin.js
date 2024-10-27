document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const adminContent = document.getElementById("adminContent");

    // Verifica se já está logado
    if (sessionStorage.getItem("loggedIn") === "true") {
        adminContent.style.display = "block";
        loginForm.style.display = "none";
    }

    // Função de login
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Exemplo de credenciais (substitua por validação real)
        if (username === "admin" && password === "senha123") {
            sessionStorage.setItem("loggedIn", "true");
            adminContent.style.display = "block";
            loginForm.style.display = "none";
        } else {
            alert("Usuário ou senha incorretos.");
        }
    });
});

// Função para logout
function logout() {
    sessionStorage.removeItem("loggedIn");
    location.reload();
}
