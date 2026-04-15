// nav items scroll on each section

const sections = document.querySelectorAll(" .section");
const navItems = document.querySelectorAll("nav ul li");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;

      // remove active class from all
      navItems.forEach(li => li.classList.remove("active"));

      // add active class to current
      const activeItem = document.querySelector(`nav ul li[data-section="${id}"]`);
      activeItem.classList.add("active");

      updateWheel(activeItem);
    }
  });
}, {
  threshold: 0.6 
});

sections.forEach(section => observer.observe(section));

function updateWheel(activeItem) {
    const items = [...navItems];
    const index = items.indexOf(activeItem);
  
    const ul = document.querySelector("nav ul");
  
    ul.style.transform = `translateY(-${index * 50}px)`;
  }