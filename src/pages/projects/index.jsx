import projectData from "../../data/projects.json"
import ProjectCard from "../../components/ProjectCard"

const Projects = () => {
  
  return (
      <>
        <h3>Projects Page</h3>
        {projectData.map((p) => (
          <ProjectCard
            id={p.id}
            key={p.id}
            title={p.title}
            image={p.image}
            description={p.description}
            githubLink={p.githubLink}
            liveLink={p.liveLink}
            techStack={p.techStack}
          />
        ))}
      </>
    );
  }
  
export default Projects;