// DOM manipulation module
const DOM = (() => {
  const getElement = (selector) => document.querySelector(selector);
  const getAllElements = (selector) => document.querySelectorAll(selector);

  return {
    getElement,
    getAllElements,
  };
})();

// Blog module
const Blog = (() => {
  const init = () => {
    console.log("Blog initialized");
    // Add any initialization logic here
  };

  return {
    init,
  };
})();

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  Blog.init();
});
