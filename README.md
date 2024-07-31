# Medigate Healthcare website

This project is a medical website for Medigate, designed to provide comprehensive information on various treatments, including Total Knee Replacement.

## Table of Contents

- [Introduction](#medigate-healthcare-website)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Project Structure

```bash
├── Components
│ ├── header.html
│ ├── main.html
│ ├── servicesBar.html
│ ├── sectionTreatment.html
│ ├── SectionOtherServices.html
│ ├── SectionTopDoctors.html
│ ├── SectionHospitals.html
│ ├── SectionGetinTouch.html
│ └── footer.html
├── public/
│   └── images/
│   │   ├── patient-stories.jpg
│   │   ├──...
├── styles.css
├── main.js
├── index.html
└── README.md
```


## Installation

1. Install vite in your local system with vanilla javascript.
   ```sh
   npm create vite@latest
   ```
2. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/medical-website.git
   ```
3. Navigate to the project directory:
   ```sh
   cd medical-website
   ```
4. Open [index.html](./index.html) in your preferred web browser.

## Usage

To view the website, open [index.html](./index.html) in a web browser. The website is structured to dynamically load components using JavaScript.

## Components

- **Header**: Contains the logo, navigation menu, and contact information.
- **Main**: Displays the primary content about Total Knee Replacement including eligibility, preparation, and treatment overview.
- **Services Bar**: Quick access links to various sections of the site.
- **Section Treatment**: Detailed information on the treatment process.
- **Section Other Services**: Information on additional services provided, featuring an Owl Carousel section.
- **Section Top Doctors**: Highlighting top orthopaedic doctors using Bootstrap Carousel.
- **Section Hospitals**: Showcasing recommended hospitals using Bootstrap Carousel.
- **Section Get in Touch**: Contact form for inquiries.
- **Footer**: Contains links to important pages, social media, and contact information.

### Image Slider (Patient Stories & Videos)
The slider uses the Owl Carousel library to showcase patient stories and videos.

### Initialization Script
Ensure Owl Carousel and event listeners is initialized after all components are loaded refer [main.js](./main.js):

```javascript
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
    header + main + sectionBar + sectionTreatment + sectionOthers +
    sectionTopDoctors + sectionHospitals + sectionGetinTouch + footer;

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
  // Add here code for function and event listeners
}

// Load components and attach event listeners when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadComponents);
```

## Technologies Used

- HTML5
- CSS3
- Javascript
- Vite with vanilla Javascript
- jQuery
- Bootstrap
- Owl Carousel

## Credits

This UI design was created by [Ideamagix](https://www.ideamagix.com/).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
