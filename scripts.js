const sections = [...document.querySelectorAll("section")];

let options = {
  rootMargin: "0px",
  threshold: 0.75
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
		const { target } = entry;
		
    // checks if the intersection ratio of the entry is greater than or equal to 0.75, (at least 75% of the element is visible)
		if (entry.intersectionRatio >= 0.75) {
			target.classList.add("is-visible");
		} else {
			target.classList.remove("is-visible");
		}
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {

  // an array of all the children of the element with the attribute [data-content] inside the section
  const sectionChildren = [...section.querySelector("[data-content]").children];

  sectionChildren.forEach((el, index) => {
    // sets a CSS custom property called --delay on the element with a value that depends on its index in the array. The value is calculated by multiplying the index by 250 milliseconds. This is used to create a staggered animation effect later
    el.style.setProperty("--delay", `${index * 250}ms`);
  });

  // tells the observer to start watching the section for visibility changes
  observer.observe(section);
});
