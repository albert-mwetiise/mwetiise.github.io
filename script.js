const projects = [
  {
    title: "Weather App",
    description: "Albert gives a simple weather forecasting app using OpenWeather API.",
    link: "#"
  },
  {
    title: "Todo List",
    description: "Gift Manages daily tasks efficiently with this todo app.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Lillian  helps to show this personal portfolio website showcases my projects and skills.",
    link: "#"
  }
];

const projectList = document.getElementById('projectList');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  projectList.appendChild(card);
});
