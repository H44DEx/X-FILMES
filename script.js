function searchVideos(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const videos = document.querySelectorAll('.video-item');

    videos.forEach(video => {
        const keywords = video.getAttribute('data-keywords');
        if (keywords.includes(query)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}