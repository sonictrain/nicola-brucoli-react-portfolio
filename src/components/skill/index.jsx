import React from "react";
import StackIcon from "tech-stack-icons";

const Skill = ( props ) => {
    return (
        // Featured icons are rendered on a 2x2 grid, otherwise 1x1
        <div className={'p-5 md:p-2 lg:p-5 xl:p-8' + ' ' + (props.featured ? 'col-span-2 row-span-2' : '')}>
            <StackIcon
                name={props.techIcon}
                className='w-full h-full align-middle object-cover'
            />
        </div>
    )
}

export default Skill;