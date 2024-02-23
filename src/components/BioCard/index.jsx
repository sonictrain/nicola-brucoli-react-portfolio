import React from "react";
import bioData from '../../data/bio.json'

const BioCard = () => {

    const { name, surname, currentRole, currentCompany, city, shortBio } = bioData

    return (
        <div>
            <h1 className="text-7xl">{name} {surname}</h1>
            <h2 className="text-2xl">{currentRole} @ <span className="text-blue-950	">{currentCompany}</span></h2>
            <p classNAme="text-xl">{city}</p>
            <p>{shortBio}</p>
        </div>
    )
}

export default BioCard