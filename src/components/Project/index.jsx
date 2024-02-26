import { React } from "react";
import { Card, Typography, AspectRatio, Chip, IconButton } from '@mui/joy';
import { GitHub } from '@mui/icons-material';

const ProjectCard = ({ id, title, image, description, githubLink, isPublic, techStack }) => {

    return (
        <Card
            key={id}
            sx={{ width: 320 }}
            color="primary"
            size="md"
            variant="plain">
            <div>
                <div>
                    <Typography level="title-lg">{title}</Typography>
                    <IconButton
                        aria-label="Github Link"
                        variant="plain"
                        color="neutral"
                        disabled={!isPublic}
                        size="sm"
                        onClick={() => window.open(`${githubLink}`, '_blank')}
                        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}>
                        <GitHub />
                    </IconButton>
                </div>
                <AspectRatio
                    minHeight="120px"
                    maxHeight="200px">
                    <img
                        src={image}
                        loading="lazy"
                        alt={title}
                    />
                </AspectRatio>
                <Typography level="body-xs">{description}</Typography>
                <div>
                    {techStack.map((t, i) => (
                        <Chip key={i} size="sm" variant="soft">{t}</Chip>
                    ))}
                </div>
            </div>
        </Card>
    )
}

export default ProjectCard;