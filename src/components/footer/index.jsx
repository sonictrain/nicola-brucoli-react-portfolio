import { GitHub, LinkedIn, AlternateEmail } from '@mui/icons-material/';
import IconButton from '@mui/material/IconButton';

const Footer = () => {
    return (
        <div className='flex'>

            <IconButton aria-label="add to shopping cart">
                <GitHub
                    onClick={() => window.open('https://www.github.com/sonictrain', '_blank')} />
            </IconButton>

            <IconButton aria-label="add to shopping cart">
                <LinkedIn
                    onClick={() => window.open('https://www.github.com/sonictrain', '_blank')} />
            </IconButton>

            <IconButton aria-label="add to shopping cart">
                <AlternateEmail
                    onClick={() => window.open('https://www.github.com/sonictrain', '_blank')} />
            </IconButton>

        </div>
    )
}

export default Footer;