// Function to load component as HTML text
async function loadComponent(url) {
  const response = await fetch(url);
  return await response.text();
}

// Function to innerHTML the components
async function loadComponents() {
  const header = await loadComponent('./Components/header.html');
  const main = await loadComponent('./Components/main.html');
  const sectionBar = await loadComponent('./Components/servicesBar.html');
  const sectionTreatment = await loadComponent('./Components/sectionTreatment.html');
  const sectionOthers = await loadComponent('./Components/SectionOtherServices.html');
  const sectionTopDoctors = await loadComponent('./Components/SectionTopDoctors.html');
  const sectionHospitals = await loadComponent('./Components/SectionHospitals.html');
  const sectionGetinTouch = await loadComponent('./Components/SectionGetinTouch.html');
  const footer = await loadComponent('./Components/footer.html');
  
  document.getElementById("content").innerHTML = 
    header + main + sectionBar + sectionTreatment + sectionOthers + sectionTopDoctors + sectionHospitals + sectionGetinTouch + footer;

  // Hide loader and show content
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
  
  initializeOwl();
  attachEventListeners(); // Attach event listeners after components are loaded
}


// function to initialize owl script when DOM is loaded -
function initializeOwl(){
  $(".owl-carousel").owlCarousel({
    items: 2, // Show two images at a time
    loop: true,
    margin: 2, // Reduced margin between images
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1, // 1 item for smaller screens
      },
      600: {
        items: 2, // 2 items for wider screens
      },
    },
  });
}


// Function to attach event listeners
function attachEventListeners() {

  // Main menu mobile screen toggler
  document.querySelector(".navbar-toggler").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("show");
  });

  // Main function to handle dropdown
  function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    let dropdown = document.getElementById(dropdownId);
    document.querySelectorAll(".dropdown-content").forEach(function (dropdownContent) {
      if (dropdownContent !== dropdown) {
        dropdownContent.style.display = "none";
      }
    });
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  // Treatment dropdown
  document.querySelector(".treatments-btn").addEventListener("click", function (event) {
    toggleDropdown(event, "treatmentsDropdown");
  });

  // Destinations dropdown
  document.querySelector(".destinations-btn").addEventListener("click", function (event) {
    toggleDropdown(event, "destinationsDropdown");
  });

  // Close dropdown
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-content").forEach(function (dropdownContent) {
        dropdownContent.style.display = "none";
      });
    }
  });

  // Flag dropdown
  document.getElementById("flag-toggle-id").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("countryDropdown").classList.toggle("show");
  });

  window.onclick = function (event) {
    if (!event.target.matches(".flag-toggle") && !event.target.closest(".flag-select")) {
      const dropdowns = document.getElementsByClassName("flag-dropdown-content");
      for (const dropdown of dropdowns) {
        if (dropdown.classList.contains("show")) {
          dropdown.classList.remove("show");
        }
      }
    }
  };

  // FAQ toggle functions
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const toggleButton = this.querySelector(".toggle-button");
      this.classList.toggle("active");
      const answer = this.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
        toggleButton.textContent = "+";
      } else {
        answer.style.display = "block";
        toggleButton.textContent = "-";
      }
    });
  });
}

// Load components and attach event listeners when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadComponents);
