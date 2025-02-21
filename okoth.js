document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.k-container');

    // Adding mouse enter and leave effects for unique background transition
    container.addEventListener('mouseenter', function() {
        container.style.backgroundImage = "url('bk.jpg')";
    });

    container.addEventListener('mouseleave', function() {
        container.style.backgroundImage = "none";
    });
});
// Smooth scrolling effect for social media links
document.querySelectorAll('.journey-container a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);  // Get the target of the link
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add an interactive fade-in effect for content
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelectorAll('.journey-container h1, .journey-container p');
    content.forEach(item => {
        item.classList.add('fade-in-effect');
    });
});
