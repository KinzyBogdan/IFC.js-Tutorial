import {projects} from "./projects.js";

const projectsContainer = document.getElementById("projects-container");
const projectCards = Array.from(projectsContainer.children);
console.log(projectCards);

const templateProjectCard = projectCards[0];
const cardTitle = templateProjectCard.querySelector('h3');
console.log(cardTitle.textContent);

const baseUrl = "https://kinzybogdan.github.io/viewer.html"

for(let project of projects) {
    const newCard = templateProjectCard.cloneNode(true);
    const cardTitle = newCard.querySelector('h3');
    cardTitle.textContent = project.name;
    console.log(cardTitle.textContent);
    const modelUrl = baseUrl + "?id=" + project.id;
    console.log(modelUrl);
    newCard.href = modelUrl;

    projectsContainer.appendChild(newCard);
}

templateProjectCard.remove();






