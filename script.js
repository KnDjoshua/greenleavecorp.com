// Add scroll animation on sections
const sections = document.querySelectorAll('.fade-in-up');

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('animate');
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
