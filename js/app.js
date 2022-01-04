// Define Global Variables

// navigationBar global var
const navigationBar = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

// Begin Main Functions

// build the nav

const navGenerator = () => {

    let navigationUL = '';
    // looping over all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navigationUL += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all elements to the navigationBar
    navigationBar.innerHTML = navigationUL;


};

navGenerator();

// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number
const OffSet = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removingActivation = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const addingActivation = (conditional, section) => {
    if (conditional) {
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: rgba(250,190,130,.3);";
    };
};

//implementating the actual function

const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffSet = OffSet(section);

        inviewport = () => elementOffSet < 150 && elementOffSet >= -400;

        removingActivation(section);
        addingActivation(inviewport(), section);
    });
};

window.addEventListener('scroll', sectionActivation);

// Scroll to anchor ID using scrollTO event

const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for (i = 0; i < sections; i++) {
                sections[i].addEventListener("click", sectionScroll(link));
            }
        });
    });

};

scrolling();


//End Main Functions

// set timeout for scrolling 
let isScrolling;
document.onscroll = () => {
    clearTimeout(isScrolling)
    isScrolling = setTimeout(() => {}, 1000);
};

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}