import skillData from "../../data/skills.json"
import Skill from "../../components/Skill"

const Skills = () => {
    return (
      <>
        <h3>Skills Page</h3>
        {skillData.map((s) => (
          <Skill
            id={s.id}
            key={s.id}
            skillName={s.skillName}
            techIcon={s.techIcon}
            />
        ))}
      </>
    );
  }
  
export default Skills;