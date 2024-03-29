import projectData from "../../data/projects.json"
import ProjectCard from "../../components/Project"
import Signature from '../../components/Signature'

const Projects = () => {
  return (
    <div className='w-full flex flex-col gap-12 font-sans min-h-full'>
        {/* Projects information are retrieved via json */}
        {projectData.map((p) => (
          <ProjectCard
            id={p.id}
            key={p.id}
            title={p.title}
            image={p.image}
            description={p.description}
            githubLink={p.githubLink}
            isPublic={p.isPublic}
            techStack={p.techStack}
          />
        ))}
      <Signature />
    </div>
  );
}

export default Projects;