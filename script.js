const scrollTrigger = (selector, options = {}) => {
  let elements = document.querySelectorAll(selector);
  Array.from(elements).forEach((element) => {
    addObserver(element, options);
  });
};

const addObserver = (element, options) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("add-animation", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(element);
};

scrollTrigger(".festival-card", { threshold: 0.5 });
scrollTrigger(".partner-logo", { threshold: 0 });
