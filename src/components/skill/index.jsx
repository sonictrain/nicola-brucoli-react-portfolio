import React from "react";
import StackIcon from "tech-stack-icons";

const Skill = ( props ) => {
    return (
        <div className={'bg-slate-200 p-10' + ' ' + (props.featured ? 'col-span-2 row-span-2' : '')}>
            <StackIcon
                name={props.techIcon}
                className='w-full h-full align-middle object-cover'
            />
        </div>
    )
}

export default Skill;