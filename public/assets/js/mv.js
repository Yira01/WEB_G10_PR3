function onYouTubeIframeAPIReady() {
    // Cuando la API de YouTube esté lista, inicializamos los reproductores
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
  
    videoThumbnails.forEach(thumbnail => {
      const videoId = thumbnail.getAttribute('data-video-id');
      const playerDiv = document.createElement('div');
      playerDiv.classList.add('video-player');
      thumbnail.appendChild(playerDiv);
  
      new YT.Player(playerDiv, {
        width: 560,
        height: 315,
        videoId: videoId,
        playerVars: {
          autoplay: 0,
        },
      });
  
      // Obtener automáticamente la miniatura del video desde la API de YouTube
      fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=TU_API_KEY&part=snippet`)
        .then(response => response.json())
        .then(data => {
          const thumbnailUrl = data.items[0].snippet.thumbnails.maxres.url;
          const imgElement = document.createElement('img');
          imgElement.src = thumbnailUrl;
          imgElement.alt = 'Miniatura del video';
          thumbnail.appendChild(imgElement);
        });
  
      thumbnail.addEventListener('click', () => {
        thumbnail.style.display = 'none';
        playerDiv.style.display = 'block';
      });
    });
  }
  
  