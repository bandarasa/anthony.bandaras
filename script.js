document.querySelectorAll('.toggle').forEach(item => {
  item.addEventListener('click', () => {
    const details = item.nextElementSibling;
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  });
});