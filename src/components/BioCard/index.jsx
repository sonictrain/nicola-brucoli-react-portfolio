import React from "react";
import bioData from '../../data/bio.json'

const BioCard = () => {

    const { name, surname, currentRole, currentCompany, city, shortBio } = bioData

    return (
        <div>
            <h1>{name} {surname}</h1>
            <h2>{currentRole} at {currentCompany}</h2>
            <p>{city}</p>
            <p>{shortBio}</p>
        </div>
    )
}

export default BioCard