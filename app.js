// Select DOM elements
const nav = document.querySelector("#nav");
const overlay = document.querySelector(".overlay");
const image = document.querySelector("#img-1");
const heading = document.querySelector("#heading");
const content = document.querySelector("#content");

// Log selected elements to the console
console.log(image, heading, content);

// Variables to manage content switching
let slideNum = 1;

const headings = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];

const contents = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",

  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",

  "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];

// Function to open navigation
function openNav() {
  nav.style.display = "flex";
  nav.classList.remove("hide");
  overlay.style.display = "block";
}

// Function to close navigation
function closeNav() {
  overlay.style.display = "none";
  nav.classList.add("hide");
  setTimeout(() => {
    nav.style.display = "none";
    nav.classList.remove("hide");
  }, 600);
}

// Function to handle window resize
function handleResize() {
  if (window.innerWidth > 785) {
    nav.style.display = "flex";
  } else if (!nav.classList.contains("show")) {
    nav.style.display = "none";
  }
}

// Add resize event listener to window
window.addEventListener("resize", handleResize);

// Initial call to handleResize to set initial state
handleResize();

// Function to update content based on the current 'slideNum' value
function updateContent() {
  heading.textContent = headings[slideNum - 1];
  content.textContent = contents[slideNum - 1];
  image.src = `./images/desktop-image-hero-${slideNum}.jpg`;

  // Add animation classes
  image.classList.add("flip-in-ver-right");
  content.classList.add("fade-in-fwd");
  heading.classList.add("fade-in-fwd");

  // Remove animation classes after 1 second
  setTimeout(() => {
    image.classList.remove("flip-in-ver-right");
    heading.classList.remove("fade-in-fwd");
    content.classList.remove("fade-in-fwd");
  }, 1000);
}

// Function to show the next slide
function next() {
  slideNum = slideNum + 1;
  if (slideNum > 3) {
    slideNum = 1;
  }
  updateContent();
}

// Function to show the previous content
function previous() {
  slideNum = slideNum - 1;
  if (slideNum < 1) {
    slideNum = 3;
  }
  updateContent();
}

// Initialize the content on page load
updateContent();
