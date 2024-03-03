import React from "react";
import bioData from '../../data/bio.json'
import { PersonPin } from '@mui/icons-material';

const BioCard = () => {

    const { name, surname, currentRole, currentCompany, city, shortBio } = bioData
    // Pulling personal data from JSON 
    return (
        <div className='flex flex-col gap-1'>
            <h1 className="text-6xl font-bold tracking-tight">{name} {surname}</h1>
            <h2 className="text-lg tracking-tight mt-3">{currentRole} @ <span>{currentCompany}</span></h2>
            <div className='flex gap-1 text mt-3'>
                <PersonPin />
                <p>{city}</p>
            </div>
            <p className="text-stone-900">{shortBio}</p>
        </div>
    )
}

export default BioCard;