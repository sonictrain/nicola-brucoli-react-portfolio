// Signature component to be rendered on all the pages
const Signature = () => {
    return (
        <p className='flex-none text-md mt-auto pt-20 text-stone-900'>Designed in 
            <a href={'https://figma.com/'}              className="text-stone-700 hover:text-accent-200 hover:shadow-accent-200"> Figma</a> and coded in 
            <a href={'https://code.visualstudio.com/'}  className="text-stone-700 hover:text-accent-200 hover:shadow-accent-200"> Visual Studio Code</a> by me. Built with 
            <a href={'https://react.dev/'}              className="text-stone-700 hover:text-accent-200 hover:shadow-accent-200"> React</a>, 
            <a href={'https://mui.com/'}                className="text-stone-700 hover:text-accent-200 hover:shadow-accent-200"> Material UI</a> and 
            <a href={'https://tailwindcss.com/'}        className="text-stone-700 hover:text-accent-200 hover:shadow-accent-200"> Tailwind CSS</a> under the hood, deployed with 
            <a href={'https://netlify.com/'}            className="text-stone-700 hover:text-accent-200 hover:shadow-accent-200"> Netlify</a>. All text is set in the 
            <a href={'https://rsms.me/inter/'}          className="text-stone-700 hover:text-accent-200 hover:shadow-accent-200"> Inter</a> typeface.
        </p>
    )
}

export default Signature;