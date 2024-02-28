import { Button, Input, Textarea } from '@mui/joy';
import Signature from '../../components/Signature';

const Contacts = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex flex-col gap-2'>
        <Textarea
          color="primary"
          minRows={1}
          size="md"
          variant="outlined"
        />
        <Input size="md" placeholder="your@email.com" variant="outlined" color="primary" endDecorator=
          {
            <Button variant="soft" size="sm">
              Send!
            </Button>
          }
          sx={{ '--Input-radius': '25px', '--Input-decoratorChildHeight': '50px' }}
        />
      </div>
      <Signature />
    </div>
  );
}

export default Contacts;