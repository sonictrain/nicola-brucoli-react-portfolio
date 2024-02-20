import React from "react";

const ProjectCard = ( props ) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.image} />
            <p>{props.description}</p>
            <a href={props.githubLink}>Link to GitHub</a>
            <a href={props.liveLink}>Link to Live App</a>
            <ul>{props.techStack.map((t) => (
                    <li>{t}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectCard