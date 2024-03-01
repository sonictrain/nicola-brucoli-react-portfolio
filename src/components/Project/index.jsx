import { React } from "react";
import { IconButton } from '@mui/joy';

const ProjectCard = ({ id, title, image, description, githubLink, isPublic, techStack }) => {

    return (
        <div key={id}>
            <div className="flex content-start gap-3">
                <img className="object-contain w-1/4 h-max-content mb-auto" src={image} alt={image}></img>
                <div className="">
                    <div className="flex items-center">
                        <h3 className="font-bold text-lg pe-2">{title}</h3>
                        <IconButton
                            disabled={!isPublic}
                            size="sm"
                            variant="text"
                            onClick={() => window.open(githubLink, '_blank')}
                            className="rounded bg-[#121625] focus:shadow-accent-900 hover:bg-accent-900 hover:shadow-accent-900/50">
                            <i className="fa-solid fa-arrow-up-right-from-square text-sm text-accent-200 hover:text-accent-200" />
                        </IconButton>
                    </div>
                    <p className="text-stone-700 font-light text-sm mt-1">
                        {description}
                    </p>
                    <div className='mt-3'>
                        {techStack.map((t, i) => (
                            <span key={i} className="bg-accent-900 text-accent-200 inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{t}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;