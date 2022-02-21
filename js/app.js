/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 *Global Variables
 */

// Store the number of sections for use:
const sections = document.querySelectorAll("section");




// building the navbar:
document.addEventListener("DOMContentLoaded", navBarCreation);

function navBarCreation() {
    const list = document.querySelector("ul#navbar__list");
    //Create a document Fragment to temporarily store items in, instead of adding items one by one for performance gain
    const docFragment = document.createDocumentFragment();
    for (const section of sections) {
        const listItem = document.createElement("li")
        listItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`
        // Prevent the HTML link from changing upon clicking a link and also enable the smooth scrolling behaviour:
        listItem.addEventListener("click", (e) => {
            e.preventDefault();
            section.scrollIntoView({
                behavior: "smooth"
            });
        });
        docFragment.appendChild(listItem);
    }
    list.appendChild(docFragment);
}


// Setting sections as active:
window.addEventListener("scroll", highlightEverything)

function highlightEverything() {
    for (const section of sections) {
        const sectionT = section.getBoundingClientRect().top;
        const link = document.querySelector(`a[href="#${section.id}"]`);
        // Mark currently viewed section and it's corresponding link as active:
        if (sectionT > 0 && sectionT <= 333) {
            section.classList.add('active');
            link.classList.add('active');
        } else {
            section.classList.remove('active');
            link.classList.remove('active')
        }
    }
}
