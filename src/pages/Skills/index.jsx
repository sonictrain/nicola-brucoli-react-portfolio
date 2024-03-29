import skillData from "../../data/skills.json"
import Skill from "../../components/Skill"
import Signature from '../../components/Signature'

const Skills = () => {
  return (
    <div className='flex flex-col justify-between min-h-full'>
      {/* Grid container */}
      <div className='grid gap-2 grid-cols-3 auto-rows-min grid-flow-dense'>
        {/* Skill data are retrieved via json */}
        {skillData.map((skill) => (
          <Skill
            id={skill.id}
            key={skill.id}
            skillName={skill.skillName}
            techIcon={skill.techIcon}
            featured={skill.featured}
          />
        ))}
      </div>
      <Signature />
    </div>
  )

}

export default Skills;