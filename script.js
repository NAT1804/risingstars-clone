const scrollTrigger = (selector, options = {}) => {
  let elements = document.querySelectorAll(selector)
  Array.from(elements).forEach((element) => {
    addObserver(element, options)
  })
}

const addObserver = (element, options) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('add-animation', entry.isIntersecting)
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
    })
  }, options)

  observer.observe(element)
}

scrollTrigger('.festival-card', { threshold: 0.5 })
scrollTrigger('.artist-card', { threshold: 0.5 })
scrollTrigger('.partner-logo', { threshold: 0 })

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 40,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    // },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    780: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
