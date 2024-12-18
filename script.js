const projects = document.querySelector(".projects");

const LIST_PROJECTS = [
    "01-expanding-cards",
    "02-progress-steps",
    "03-rotating-navigation",
    "04-hidden-search",
    "05-blurry-loading",
    "06-scroll-animation",
    "07-split-landing-page",
    "08-form-input-wave",
    "09-sound-board",
    "10-dad-jokes",
    "11-event-key-codes",
    "12-frequently-asked-questions",
    "13-random-choice-picker",
    "14-animated-navigation",
    "15-incrementing-counter",
    "16-drink-water",
    "17-movie-app",
    "18-background-slider",
    "19-theme-clock",
    "20-button-ripple-effect",
    "21-drag-n-drop",
    "22-drawing-app",
    "23-kinetic-css-loader",
    "24-content-placeholder",
    "25-sticky-navbar",
    "26-double-vertical-slider",
    "27-toast-notification",
    "28-github-profiles",
    "29-double-heart-click",
    "30-auto-text-effect",
    "31-password-generator",
    "32-good-cheap-fast-checkboxes",
    "33-notes-app",
    "34-animated-countdown",
    "35-image-carousel",
]

const projectsList = LIST_PROJECTS.map(project => {
    const title = project.slice(3).split("-").join(" ");
    const number = project.slice(0, 2);

    return (`
        <div class="project">
            <span class="project__number">${number}</span>
            <img src="/images/${project}.png" alt="${project}" />
            <div class="project__hidden-block">
                <h2>${title}</h2>
                <a href="/projects/${project}/index.html" target="_blank">Open Demo</a>
            </div>
        </div>
    `)
}).join("");

projects.innerHTML = projectsList;
