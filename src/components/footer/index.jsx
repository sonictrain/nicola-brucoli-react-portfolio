import { IconButton } from "@material-tailwind/react";

const Footer = () => {
    return (
        <div className="flex gap-4">
            <IconButton
                onClick={() => window.open('https://www.github.com/sonictrain', '_blank')}
                className="rounded bg-[#121625] focus:shadow-[#555C77]/20 hover:bg-[#142934] hover:shadow-[#555C77]/10">
                <i className="fab fa-github text-2xl text-stone-200 hover:text-accent-200" />
            </IconButton>
            <IconButton
                onClick={() => window.open('mailto:nicola.brucoli92@gmail.com', '_blank')}
                className="rounded bg-[#121625] focus:shadow-[#555C77]/20 hover:bg-[#142934] hover:shadow-[#555C77]/10">
                <i className="fa-solid fa-envelope text-2xl text-stone-200 hover:text-accent-200" />
            </IconButton>
            <IconButton
                onClick={() => window.open('https://www.linkedin.com/in/brucolinicola', '_blank')}
                className="rounded bg-[#121625] focus:shadow-[#555C77]/20 hover:bg-[#142934] hover:shadow-[#555C77]/10">
                <i className="fa-brands fa-linkedin text-2xl text-stone-200 hover:text-accent-200" />
            </IconButton>
        </div>
    )
}

export default Footer;