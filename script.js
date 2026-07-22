// Função para abrir o modal de um produto específico
function openModal(id) {
    const modal = document.getElementById('m' + id);
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Função para fechar o modal de um produto específico
function closeModal(id) {
    const modal = document.getElementById('m' + id);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Fecha o modal caso o usuário clique fora da caixa de conteúdo (no fundo escuro)
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}