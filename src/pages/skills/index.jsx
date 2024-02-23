import skillData from "../../data/skills.json"
import Skill from "../../components/Skill"
import { Stack, Card } from '@mui/joy';


const Skills = () => {
  return (
    <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>

      {skillData.map((s) => (
        <Card size="lg" variant="plain">
          <Skill
            id={s.id}
            key={s.id}
            skillName={s.skillName}
            techIcon={s.techIcon}
          />
        </Card>
      ))}
    </Stack>
  )

}

export default Skills;