document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelector(".like-btn");
  const postMedia = document.querySelector(".post-media");
  const likesCountSpan = document.querySelector(".likes-count");
  const detailsLikesCount = document.getElementById("details-likes-count");
  const bookmarkBtn = document.querySelector(".bookmark-btn");

  if (!likeBtn) return;

  let isLiked = false;
  let baseLikes = 0;

  // Formata números grandes (ex: 1200 -> 1.2K)
  function formatLikes(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }

  // Atualiza a interface
  function updateUI() {
    const formatted = formatLikes(baseLikes);
    if (likesCountSpan) likesCountSpan.textContent = formatted;
    if (detailsLikesCount) detailsLikesCount.textContent = formatted;
  }

  // Adiciona Curtida
  function addLike() {
    if (!isLiked) {
      baseLikes++;
      isLiked = true;
      likeBtn.classList.add("liked");
      updateUI();
      animateSvg(likeBtn.querySelector("svg"));
    }
  }

  // Remove Curtida
  function removeLike() {
    if (isLiked) {
      baseLikes = Math.max(0, baseLikes - 1);
      isLiked = false;
      likeBtn.classList.remove("liked");
      updateUI();
    }
  }

  // Animação do SVG
  function animateSvg(svg) {
    if (!svg) return;
    svg.style.transform = "scale(1.3)";
    setTimeout(() => {
      svg.style.transform = "scale(1)";
    }, 150);
  }

  // Evento no botão de curtir
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isLiked) {
      removeLike();
    } else {
      addLike();
    }
  });

  // Evento de clique na imagem
  if (postMedia) {
    postMedia.addEventListener("click", () => {
      addLike();
    });
  }

  // Evento no botão Salvar
  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);
      animateSvg(bookmarkBtn.querySelector("svg"));
    });
  }

  // Estado inicial
  updateUI();
});