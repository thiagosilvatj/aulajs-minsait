document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Validação dos campos
        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Credenciais de teste
        const validUsername = 'admin';
        const validPassword = '1234';
        
        if (username === validUsername && password === validPassword) {
            alert('Login realizado com sucesso!');
            // Aqui você pode adicionar o redirecionamento após o login
            // window.location.href = 'index.html';
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
        }
    });
}); 