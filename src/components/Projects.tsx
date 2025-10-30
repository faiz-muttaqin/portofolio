import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project One',
      description:
        'A modern web application built with React and TypeScript. Features include responsive design, state management, and API integration.',
      technologies: ['React', 'TypeScript', 'CSS'],
      link: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description:
        'Full-stack application with authentication, real-time updates, and a beautiful user interface.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description:
        'E-commerce platform with payment integration, product management, and order tracking.',
      technologies: ['React', 'TypeScript', 'Stripe'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
