// Sample skill data
const skills = [
    {
        title: "Front-End Development",
        description: "With a solid foundation in HTML, CSS, and JavaScript, I create dynamic, responsive, and user-friendly web pages. I strive to blend aesthetics with functionality to ensure an optimal user experience.",
        image: "front.jpeg"
    },
    {
        title: "Visual Basic",
        description: "I have hands-on experience in creating applications with Visual Basic, focusing on simplicity and efficiency. I leverage its powerful features to build robust desktop applications with seamless interfaces.",
        image: "basic.jpeg"
    },
    {
        title: "C Programming",
        description: "My expertise in C programming allows me to work efficiently on system-level applications and performance-critical solutions. I write clean, efficient, and high-performance code, ensuring reliability and precision.",
        image: "c.jpeg"
    },
    {
        title: "C++ Programming",
        description: "In C++, I develop scalable and flexible software solutions, leveraging object-oriented principles to create high-quality applications. I excel in building complex systems with attention to memory management and performance optimization.",
        image: "c++.jpeg"
    }
];

let currentSkillIndex = 0;

// Function to display a single skill based on the current index
function displaySkill(skill) {
    const skillDisplay = document.getElementById('skill-display');
    skillDisplay.innerHTML = ''; // Clear previous content

    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');

    const img = document.createElement('img');
    img.classList.add('skill-image');
    img.src = skill.image;
    img.alt = skill.title;

    const skillContentDiv = document.createElement('div');
    skillContentDiv.classList.add('skill-content');

    const title = document.createElement('h2');
    title.classList.add('skill-title');
    title.textContent = skill.title;

    const description = document.createElement('p');
    description.classList.add('skill-description');
    description.textContent = skill.description;

    skillContentDiv.appendChild(title);
    skillContentDiv.appendChild(description);
    skillDiv.appendChild(img);
    skillDiv.appendChild(skillContentDiv);
    skillDisplay.appendChild(skillDiv);
}

// Load the initial skill
displaySkill(skills[currentSkillIndex]);

// Set up the "Next Update" button to show the next skill
document.getElementById('next-update').addEventListener('click', function() {
    // Move to the next skill and wrap around using modulo
    currentSkillIndex = (currentSkillIndex + 1) % skills.length;
    displaySkill(skills[currentSkillIndex]);
});
