
  document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.add('clicked');
    });
  });

