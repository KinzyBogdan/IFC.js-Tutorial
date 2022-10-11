import {projects} from "./projects.js";

const currentUrl = window.location.href;
console.log(currentUrl);
const url = new URL(currentUrl);
const current_project_id = url.searchParams.get("id");
console.log(current_project_id); 

const currentProject = projects.find(project => project.id === current_project_id);

const iframe = document.getElementById("model-iframe");
iframe.src = currentProject.url;
console.log(currentProject.url);