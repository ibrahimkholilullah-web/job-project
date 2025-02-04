let scrollAmount = 0;

function slideNext() {
    const slider = document.querySelector('.video-slider');
    const cardWidth = document.querySelector('.video-card').offsetWidth + 20; // Card width + margin
    scrollAmount += cardWidth;
    
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0; // Reset to first item if reaching the end
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
}
function slideNexts() {
    const slider = document.querySelector('.video-sliders');
    const cardWidth = document.querySelector('.video-cards').offsetWidth + 20; // Card width + margin
    scrollAmount += cardWidth;
    
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0; // Reset to first item if reaching the end
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
}
function videos() {
    const slider = document.querySelector('.videos')
    const cardWidth = document.querySelector('.video').offsetWidth + 20; // Card width + margin
    scrollAmount += cardWidth;
    
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0; // Reset to first item if reaching the end
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
}

