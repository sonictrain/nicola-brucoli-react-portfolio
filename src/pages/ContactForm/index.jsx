import { Button, Input, Textarea } from '@mui/joy';
const Contacts = () => {
  return (
    <>
      <h3 className='text-3xl'>Let's chat!</h3>
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
    </>
  );
}

export default Contacts;