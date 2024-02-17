const entries = document.querySelectorAll(".entry");
const contents = document.querySelectorAll('.entry-content');
const hideAllContent = () => contents.forEach(c => c.classList.remove('show'));

entries.forEach(entry => {
  entry.addEventListener('click', e => {
    hideAllContent();
    document.querySelector(e.target.dataset.content).classList.add('show');
  });
});