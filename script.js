// ==========================================================================
// SISTEMA DE MODAIS (ABRIR E FECHAR)
// ==========================================================================
function openModal(id) {
    const modal = document.getElementById('m' + id);
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal(id) {
    const modal = document.getElementById('m' + id);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Fechar modal ao clicar fora da caixa principal
window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});