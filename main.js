/* Your JS here. */
console.log('Hello World!')

// Get the navbar
var navbar = document.getElementById("navigation_bar");

const all_sects = document.querySelectorAll('section');
const nav_items = document.querySelectorAll('#navigation_bar ul li');
const nav_headings = document.querySelectorAll('#navigation_bar ul li a');

// Modal buttons and displays
const project_open = document.getElementById("project_open");
const modal_info_projects = document.getElementById("modal_info_projects");
const projects_close = document.getElementById("projects_close");

const experience_open = document.getElementById("experience_open");
const modal_info_work = document.getElementById("modal_info_work");
const work_close = document.getElementById("work_close");

const research_open = document.getElementById("research_open");
const modal_info_research = document.getElementById("modal_info_research");
const research_close = document.getElementById("research_close");

const slide_pics = document.querySelector('.slide_pics');

let idx_n = 0;

window.addEventListener('scroll', () => {
    let cur = 'intro';

    all_sects.forEach(section => {
        // Height of each section
        const height = section.clientHeight;

        // How much we have scrolled vs Distance of section from the page top
        if ((section.offsetTop - height/3) <= scrollY) {
            // Store section id in cur
            cur = section.getAttribute('id');
        }
    })

    // loop through all the navigation bar links
    nav_items.forEach(li => {
        li.classList.remove('current');
        if (li.classList.contains(cur)) {
            li.classList.add('current')
        }
    })
})


window.onscroll = function() {
    // Resize navbar when user scrolls past the top
    if (document.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navigation_bar").style.padding = "0px 0px";
        nav_headings.forEach(a => {
            a.style.fontSize = "20px"
        })
    } else {
        document.getElementById("navigation_bar").style.padding = "30px 10px";
        nav_headings.forEach(a => {
            a.style.fontSize = "30px"
        })
    }
};

project_open.addEventListener('click', () => {
    console.log("CLICKED");
    modal_info_projects.classList.add('show');
});
projects_close.addEventListener('click', () => {
    modal_info_projects.classList.remove('show');
});



experience_open.addEventListener('click', () => {
    modal_info_work.classList.add('show');
});
work_close.addEventListener('click', () => {
    modal_info_work.classList.remove('show');
});



research_open.addEventListener('click', () => {
    modal_info_research.classList.add('show');
});
research_close.addEventListener('click', () => {
    modal_info_research.classList.remove('show');
});




(document.querySelector('.next')).addEventListener('click', function() {
    for (var j = 0; j < slide_pics.children.length; j++) {
        slide_pics.children[j].style.zIndex = 0;
        slide_pics.children[j].style.opacity = 0;
    }

    if (idx_n >= 3) {
        idx_n = 0
    } else {
        idx_n = idx_n + 1
    }
    
    slide_pics.children[idx_n].style.opacity = 1;
    slide_pics.children[idx_n].style.zIndex = 5;
});

(document.querySelector('.last')).addEventListener('click', function() {
    for (var x = 0; x < slide_pics.children.length; x++) {
        slide_pics.children[x].style.zIndex = 0;
        slide_pics.children[x].style.opacity = 0;
    }

    if (idx_n > 0) {
        idx_n = idx_n - 1
    } else {
        idx_n = 3
    }

    slide_pics.children[idx_n].style.opacity = 1;
    slide_pics.children[idx_n].style.zIndex = 5;
});