import React from "react";
import StackIcon from "tech-stack-icons";

const Skill = ( props ) => {
    return (
        <div>
            <StackIcon name={props.techIcon} />
        </div>
    )
}

export default Skill;