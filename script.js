const texts = [
    "35 años se dicen fácil… y ahora nos estamos preparando para los que vienen.",
    "We’re celebrating our first 35 years… and now, we are preparing for the years to come..."
  ];
  
  let currentIndex = 0;
  const textElement = document.getElementById("dynamic-text");
  
  function updateText() {
    textElement.style.opacity = "0";
    setTimeout(() => {
      textElement.textContent = texts[currentIndex];
      textElement.style.opacity = "1";
      currentIndex = (currentIndex + 1) % texts.length;
    }, 200); // Sync with fade-out timing
  }
  
  setInterval(updateText, 3000);