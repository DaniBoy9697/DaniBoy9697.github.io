document.addEventListener("DOMContentLoaded", function() {
    // Crear el slider dinámicamente
    const sliderContainer = document.querySelector('.custom-slider-component');
    if (sliderContainer) {
      sliderContainer.innerHTML = `
        <div class="slider">
          <div class="slides">
            <img src="https://yourdomain.com/img1.jpg" alt="Imagen 1">
            <img src="https://yourdomain.com/img2.jpg" alt="Imagen 2">
            <img src="https://yourdomain.com/img3.jpg" alt="Imagen 3">
            <img src="https://yourdomain.com/img4.jpg" alt="Imagen 4">
          </div>
          <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
          <button class="next" onclick="changeSlide(1)">&#10095;</button>
        </div>
      `;
      
      // Insertar estilos
      const style = document.createElement('style');
      style.innerHTML = `
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .slider { position: relative; max-width: 100%; margin: auto; overflow: hidden; }
        .slides img { width: 100%; display: none; }
        .slides img:first-child { display: block; }
        .prev, .next { cursor: pointer; position: absolute; top: 50%; padding: 16px; color: white; font-weight: bold; font-size: 18px; transition: 0.6s ease; user-select: none; }
        .prev { left: 0; }
        .next { right: 0; }
        .prev:hover, .next:hover { background-color: rgba(0,0,0,0.8); }
        @media (max-width: 600px) { .prev, .next { font-size: 12px; padding: 12px; } }
      `;
      document.head.appendChild(style);
  
      // Función del slider
      let currentSlide = 0;
      window.changeSlide = function(direction) {
        const slides = sliderContainer.querySelectorAll('.slides img');
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
      };
    }
  });