helloElement.addEventListener('mouseover', () => {
    coverElement.style.display = 'block';
  });

  // Hide the cover on mouseout
  helloElement.addEventListener('mouseout', () => {
    coverElement.style.display = 'none';
  });