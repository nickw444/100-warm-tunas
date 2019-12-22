const playTrack = src => {
  const player = document.getElementById('player');
  player.classList.remove('hidden');
  document.body.classList.add('hasPlayer');
  player.setAttribute('src', src);
  player.play();
  player.onended = () => player.classList.add('hidden');
};

function installPreviewPlayer() {
  document.querySelectorAll('.result__listenButton').forEach(el => {
    el.addEventListener('click', () => {
      playTrack(el.dataset.previewSrc);
      ga('send', 'event', {
        eventCategory: 'listen',
        eventAction: 'click',
        dimension1: el.dataset.previewSrc,
        dimension2: el.dataset.songId,
      });
    })
  });
}

function installLazyImages() {
  const pendingAssets = new Set();
  const loadingAssets = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const srcUrl = entry.target.dataset.src;
      const alt = entry.target.dataset.alt;

      if (entry.isIntersecting) {
        if (pendingAssets.has(srcUrl)) {
          // This asset is already loading;
          return;
        }

        pendingAssets.add(srcUrl);
        entry.target.classList.add('result__artworkPlaceholder--loading');

        window.setTimeout(() => {
          if (pendingAssets.has(srcUrl)) {
            if (loadingAssets.has(srcUrl)) {
              return;
            }

            loadingAssets.add(srcUrl);
            const img = new Image();
            img.src = srcUrl;
            img.alt = alt;
            img.classList.add('result__artworkImage', 'result__artworkImage--fadein');
            img.onload = () => {
              entry.target.parentNode.insertBefore(img, entry.target);
              entry.target.remove();
            };
            img.onerror = () => {
              entry.target.classList.remove('result__artworkPlaceholder--loading');
            }
          }
        }, 200);
      } else {
        pendingAssets.delete(srcUrl);
      }
    })
  }, {
    rootMargin: '48px',
  });
  const placeholders = document.querySelectorAll('.result__artworkPlaceholder');
  placeholders.forEach(placeholder => observer.observe(placeholder));
}


function loadSpotifyEmbed(container) {
  const iframe = document.createElement('iframe');
  iframe.src = container.dataset.spotifyEmbedUrl;
  iframe.width = iframe.height = 300;
  iframe.classList.add('header__spotifyEmbed');
  iframe.title = 'Spotify Embed';
  iframe.onload = () => {
    iframe.classList.add('header__spotifyEmbed--loaded');
  };
  container.appendChild(iframe);
}

function installSpotifyEmbed() {
  const containerEl = document.querySelector('.header__spotify');
  if (containerEl == null) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadSpotifyEmbed(containerEl);
      observer.disconnect();
    }
  });
  observer.observe(containerEl);
}

const idleCallback = window.requestIdleCallback || (fn => window.setTimeout(fn, 50));

function installParticles(configUrl) {
  idleCallback(() => particlesJS.load('particles-js', configUrl));
}

function main() {
  installPreviewPlayer();
  installLazyImages();
  installSpotifyEmbed();
  if (window.bootstrap.particlesJsConfig) {
    installParticles(window.bootstrap.particlesJsConfig);
  }
}

document.addEventListener('DOMContentLoaded', main);
