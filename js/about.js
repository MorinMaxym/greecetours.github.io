document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    rightArrow.addEventListener('click', nextSlide);
    leftArrow.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000);
});

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    // Шлях до JSON-файлу
    const jsonPath = "data/about.json";
  
    // Функція для завантаження JSON
    async function loadReviews() {
      try {
        const response = await fetch(jsonPath);
        const data = await response.json();
        renderContent(data);
      } catch (error) {
        console.error("Помилка завантаження JSON:", error);
      }
    }
  
    // Функція рендерингу контенту
    function renderContent(data) {
      // Рендер заголовка
      const headlineSection = document.querySelector(".exp_headline");
      headlineSection.innerHTML = `
        <p>${data.headline.subtitle}</p>
        <h1>${data.headline.title.replace("Satisfied", "<span>Satisfied</span>")}</h1>
      `;
  
      // Рендер відгуку
      const userReviewSection = document.querySelector(".user_review");
      userReviewSection.innerHTML = `
        <img src="${data.review.backgroundImage}" alt="Background Image">
        <div class="user">
          <p class="user_feedback">${data.review.feedback}</p>
          <div class="user_info">
            <img src="${data.review.user.profileImage}" alt="User photo profile" width="50" height="50">
            <div class="txt">
              <p class="user_name">${data.review.user.name}</p>
              <p class="user_city">${data.review.user.city}</p>
            </div>
          </div>
        </div>
      `;
  
      // Рендер галереї
      const gallerySection = document.querySelector(".gallery");
      gallerySection.innerHTML = `
        <img src="${data.gallery[0].image}" alt="${data.gallery[0].description}">
        <section class="small_gallery">
          <div class="row">
            <img src="${data.gallery[1].image}" alt="${data.gallery[1].description}">
            <img src="${data.gallery[2].image}" alt="${data.gallery[2].description}">
          </div>
          <div class="row">
            <img src="${data.gallery[3].image}" alt="${data.gallery[3].description}">
            <img src="${data.gallery[4].image}" alt="${data.gallery[4].description}">
          </div>
        </section>
      `;
    }
  
    // Виклик функції завантаження JSON
    loadReviews();
  });
  