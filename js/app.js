// call the sections to put it is var
const sections = document.querySelectorAll('section');
// call the unordered list to put it is var 
const navigationBar = document.getElementById('navbar__list');
// generate sections in the nav bar by their id and class and create the list that hold the anchor
// generate the content by innerHTML and then appent it to listItem

function generatesections() {
    for (section of sections) {
        sectionName = section.getAttribute('data-nav');
        sectionId = section.getAttribute('id');
        listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#${sectionId}" class="menu__link">${sectionName}</a>`
        navigationBar.appendChild(listItem);
    }
}
// call the fuction
generatesections();

// this the an extra method to activate the viewport section
// I hope you to un comment it and try it 
/*
// restrict the updating on the viewport area only 
function viewportSection(ele) {
    let sectionviewport = ele.getBoundingClientRect();
    return Math.floor(sectionviewport.top > 0);
}
// activate the class of changing backgroung when it is in viewport
function trackActiveClass() {
    for (section of sections) {
        if (viewportSection(section)) {
            // if it is in the viewport and doesnt have the class add it
            if (!section.classList.contains('your-active-class')) {
                section.classList.add('your-active-class');
                section.setAttribute('style', 'background-color: rgba(50,50,0,0.2);');
            }
            // if its out viewport remove the shadowing
        } else {
            section.classList.remove('your-active-class');
            section.setAttribute('style', 'background-color: trasparent;');
        }

    }
}
// adding EventListener to call the function when scrolling
document.addEventListener('scroll', trackActiveClass);
*/
// making an arrow function to store ids of sections to activate it when it is in viewport
const activeInViewport = () => {
    const elem = document.querySelector('.your-active-class');
    const section1 = document.querySelector('#section1');
    const section2 = document.querySelector('#section2');
    const section3 = document.querySelector('#section3');
    const section4 = document.querySelector('#section4');
    let scrollPos = window.scrollY;
    //specify every section with its distance on Y axis from the top
    // adds 'your-active-class' class to viewport section
    // the heading has no active class
    if (scrollPos <= 130) {
        elem.classList.remove('your-active-class');
        // section1
    } else if (scrollPos < 620) {
        section1.classList.add('your-active-class');
        section2.classList.remove('your-active-class');
        return;
        // section2
    } else if (625 <= scrollPos && scrollPos <= 1400) {
        section2.classList.add('your-active-class');
        section1.classList.remove('your-active-class');
        section3.classList.remove('your-active-class');
        return;
        // section3
    } else if (1450 <= scrollPos && scrollPos <= 2100) {
        section3.classList.add('your-active-class');
        section4.classList.remove('your-active-class');
        section2.classList.remove('your-active-class');
        return;
        // section4
    } else if (scrollPos < 2300) {
        section4.classList.add('your-active-class');
        section3.classList.remove('your-active-class');
        return;
    }
};
// call the function when scrolling 
window.addEventListener('scroll', activeInViewport);

// the fuction to scroll to the appropriate section
function clickToScrolling() {
    const links = document.querySelectorAll('.navbar__menu a');
    for (link of links) {
        link.addEventListener("click", function iteration() {
            for (i = 0; i < sections; i++) {
                sections[i].addEventListener("click", sectionScroll(link));
            }
        });
    };
};
clickToScrolling();

// Add a scroll to top button on the page that’s only visible when the user scrolls below .

//Get the button
const mybutton = document.getElementById("myBtn");

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
};
