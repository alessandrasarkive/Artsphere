const videos = document.querySelectorAll("video");
const appContainer = document.querySelector("#app-container");
let isMuted = true;

appContainer.addEventListener("scroll", () => {
  const halfHeight = window.innerHeight / 2;
  videos.forEach(video => {
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= halfHeight) {
      video.currentTime = 0;
      video.play();
    } else {
      video.pause();
    }
  });
});

document.querySelectorAll(".like").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");

    const countElem = document.querySelectorAll(".like-count")[index];
    let currentLikes = parseInt(countElem.textContent, 10);

    if (btn.classList.contains("liked")) {
      currentLikes += 1;
    } else {
      currentLikes -= 1;
    }

    countElem.textContent = currentLikes;
  });
});

document.querySelectorAll(".bookmark").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("bookmarked");
  });
});

document.querySelectorAll(".volume").forEach(btn => {
  btn.addEventListener("click", () => {
    isMuted = !isMuted;
    videos.forEach(video => video.muted = isMuted);
  });
});
