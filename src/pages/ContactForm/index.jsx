import { Box, Button, Input, Textarea } from '@mui/joy';

const Contacts = () => {
  return (
    <>
      <h3>Let's chat!</h3>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Textarea
          color="primary"
          minRows={4}
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
      </Box>
    </>
  );
}

export default Contacts;