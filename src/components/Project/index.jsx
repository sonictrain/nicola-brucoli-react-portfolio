import { React } from "react";
import { Card, Typography, AspectRatio, Chip, IconButton } from '@mui/joy';
import { GitHub } from '@mui/icons-material';

const ProjectCard = ({ id, title, image, description, githubLink, isPublic, techStack }) => {

    return (
        <>
            <div key={id} className="w-full rounded overflow-hidden">

                <img className="w-full"
                    src={image}
                    loading="lazy"
                    alt={title}>
                </img>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {techStack.map((t, i) => (
                        <Chip key={i} size="sm" variant="soft">{t}</Chip>
                    ))}
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
            </div>
        </>
    )
}

export default ProjectCard;