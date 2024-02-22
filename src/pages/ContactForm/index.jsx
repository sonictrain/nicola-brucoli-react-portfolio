import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';

const Contacts = () => {
  return (
    <>
      <h3>Wanna have a chat?</h3>
      <FormControl>
        <FormLabel>Textfield</FormLabel>
        <TextField></TextField>
        <Button>Submit</Button>
      </FormControl>
    </>
  );
}

export default Contacts;