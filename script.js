// script.js
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '409',
    width: '727',
    videoId: 'Pj9YnrOxo-w', // Substitua com o ID real do seu vídeo do YouTube
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'showinfo': 0,
      'rel': 0,
    },
    events: {
      'onReady': onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  event.target.setPlaybackQuality('hd720');
}
// Adicione ao seu arquivo de script (script.js)
var overlay = document.getElementById('overlay');

function startVideo() {
  var videoWrapper = document.querySelector('.video-wrapper');
  videoWrapper.removeChild(overlay);
}
