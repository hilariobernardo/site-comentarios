function abrirModal() {
    document.getElementById('modalOverlay').classList.add('active');
}

function fecharModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}


document.getElementById('modalOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        fecharModal();
    }
});

function adicionarReview(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const comentario = document.getElementById('comentario').value;

    const reviewsList = document.getElementById('reviewsList');

    const novoReview = `
                <div class="review-card">
                    <h3 class="review-title">${titulo}</h3>
                    <p class="review-text">${comentario}</p>
                    <div class="vote"><button id="review-upvote" class="review-vote"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/>
    </svg></button><button id="review-downvote" class="review-vote"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transform: rotate(180deg)">
    <path d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/>
</svg></button></div>
                    
                </div>
            `;

    reviewsList.innerHTML = novoReview + reviewsList.innerHTML;

    document.getElementById('titulo').value = '';
    document.getElementById('comentario').value = '';

    fecharModal();
}