import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons/css/boxicons.min.css";
import "./style.css";
import "./theme.js";
import projects from "../data/projects.json";

const navigationToggle = document.getElementById("navigation-toggle");
const navigationMobile = document.getElementById("navigation-mobile");
const navigationBackdrop = document.getElementById("navigation-backdrop");
const projectList = document.querySelector(".project-list");

// Navigation toggle logic
const closeNavigationMenu = () => {
	navigationToggle.checked = false;
	navigationBackdrop.style.display = "none";
};
navigationToggle.addEventListener("change", () => {
	navigationToggle.checked
		? (navigationBackdrop.style.display = "block")
		: (navigationBackdrop.style.display = "none");
});
navigationMobile.addEventListener("click", closeNavigationMenu);
navigationBackdrop.addEventListener("click", closeNavigationMenu);

const renderProjects = (projects) => {
	projects.forEach(({ name, description, href, image, alt }) => {
		const htmlText = `
			<a
				href="${href}"
				target="_blank"
				class="w-fit m-auto"
				><div class="project-container group/project">
					<div class="project-img-wrapper">
						<img
							class="project-img"
							src="${image}"
							alt="${alt}"
						/>
					</div>
					<div>
						<h3 class="project-name">
							${name}<span class="inline-block"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="project-svg"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
						</h3>
						<p class="project-description">
							${description}
						</p>
					</div>
				</div></a
			>
		`;
		const li = document.createElement("li");
		li.innerHTML = htmlText;
		projectList.appendChild(li);
	});
};

const hidePlaceholders = () => {
	document.querySelectorAll(".project-placeholder").forEach((element) => {
		element.style.display = "none";
	});
};

const loadProjects = async () => {
	projectList.classList.add("loading");

	// const res = await fetch("/api/projects");
	// const projects = await res.json();

	hidePlaceholders();
	renderProjects(projects);

	// Place holder need w-full while real content need w-fit
	projectList.style.width = "fit-content";
	projectList.classList.remove("loading");
};
loadProjects();
