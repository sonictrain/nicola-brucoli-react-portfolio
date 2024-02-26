import skillData from "../../data/skills.json"
import Skill from "../../components/Skill"
import { Stack, Card } from '@mui/joy';


const Skills = () => {
  return (
    <div className='grid gap-2 grid-cols-3 auto-rows-min grid-flow-dense'>
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
  )

}

export default Skills;

{/* <div className='grid grid-cols-3 gap-4'>
{skillData.map((skill) => (
  <Skill
    id={skill.id}
    key={skill.id}
    skillName={skill.skillName}
    techIcon={skill.techIcon}
    featured={skill.featured}
  />
))} */}